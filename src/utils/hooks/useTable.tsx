import React, { useState } from "react";
import { DataroomDocumentProps } from "@/types/institutionalInvestors/dataroomDocument";
// State Management
import { useSetAtom } from "jotai";
import { isShowNotificationAtom, notificationDescriptionAtom, notificationHeaderAtom, notificationTypeAtom } from "@/jotai/notifications/notification";
// Hooks
import { useInProgressNotification } from "@/utils/hooks/notifications/useInProgressNotification";

export const useFileTable = (
  files: DataroomDocumentProps[],
  setFiles: (item: DataroomDocumentProps[]) => void,
  breadcrumbs: DataroomDocumentProps[],
  setBreadcrumbs: (item: DataroomDocumentProps[]) => void
) => {

    // Hooks
    const { triggerInProgressNotification } = useInProgressNotification();
    
    const [selectedFiles, setSelectedFiles] = useState(files);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
    const [fileToDelete, setFileToDelete] = useState<DataroomDocumentProps | null>(null);

    const setIsShowNotification = useSetAtom(isShowNotificationAtom);
    const setNotificationHeader = useSetAtom(notificationHeaderAtom);
    const setNotificationDescription = useSetAtom(notificationDescriptionAtom);
    const setNotificationType = useSetAtom(notificationTypeAtom);

    const handleSelectFile = (file: DataroomDocumentProps) => {
        if (file?.contents && file.contents.length > 0) {
        const fileContents = file.contents;
    
        setSelectedFiles([...fileContents]);
        if (breadcrumbs.length > 0) {
            setBreadcrumbs([
            ...breadcrumbs,
            file
            ]);
        } else {
            setBreadcrumbs([
            { id: 0, label: 'Home', type: 'Folder', lastModified: new Date(), isSaved: false },
            file
            ]);
        }
        } else {
        handleDownloadFile(file);
        }
    };
    

    const handleSelectBreadcrumb = (breadcrumb: DataroomDocumentProps) => {
        if (breadcrumb?.id === 0) {
        setBreadcrumbs([]);
        setSelectedFiles([...files]);
        } else {
        const findBreadcrumbPath = (items: DataroomDocumentProps[], targetId: number): DataroomDocumentProps[] | undefined => {
            for (const item of items) {
            if (item.id === targetId) {
                return [item];
            }
            if (item.contents) {
                const path = findBreadcrumbPath(item.contents, targetId);
                if (path) {
                return [item, ...path];
                }
            }
            }
            return undefined;
        };
    
        const findSelectedContents = (items: DataroomDocumentProps[], targetId: number): DataroomDocumentProps[] | undefined => {
            for (const item of items) {
            if (item.id === targetId) {
                return item.contents || [];
            }
            if (item.contents) {
                const contents = findSelectedContents(item.contents, targetId);
                if (contents) {
                return contents;
                }
            }
            }
            return undefined;
        };
    
        const path = findBreadcrumbPath(files, breadcrumb.id);
        if (path) {
            const breadcrumbIndex = breadcrumbs.findIndex(item => item.id === breadcrumb.id);
            if (breadcrumbIndex !== -1) {
            // Directly set the new breadcrumbs array
            const newBreadcrumbs = breadcrumbs.slice(0, breadcrumbIndex + 1);
            setBreadcrumbs(newBreadcrumbs);
            }

            const newSelectedFiles = findSelectedContents(files, breadcrumb.id) || [];
            setSelectedFiles(newSelectedFiles);
        }
        }
    };
    

    const handleSaveFile = (file: DataroomDocumentProps, value: boolean) => {
        const updateFileInDocuments = (docs: DataroomDocumentProps[], targetId: number, newValue: boolean): DataroomDocumentProps[] => {
        return docs.map(doc => {
            if (doc.id === targetId) {
            return { ...doc, isSaved: newValue };
            } else if (doc.contents) {
            return { ...doc, contents: updateFileInDocuments(doc.contents, targetId, newValue) };
            }
            return doc;
        });
        };

        const updatedFiles = updateFileInDocuments(files, file.id, value);
        setFiles(updatedFiles);

        const updatedSelectedFiles = selectedFiles.map(selectedFile => 
        selectedFile.id === file.id ? { ...selectedFile, isSaved: value } : selectedFile
        );
        setSelectedFiles(updatedSelectedFiles);
    };

    const handleDownloadFile = (file: DataroomDocumentProps) => {
        triggerInProgressNotification(
            `Downloading ${file.label}...`,
            'Warning',
            `${file.label} ${file.type.toLowerCase()} successfully downloaded!`,
            'Success'
        )
    };

    const handleDeleteFileAlert = (file: DataroomDocumentProps) => {
        setIsDeleteAlertOpen(true);
        setFileToDelete(file);
    };

    const handleCancelDeleteFile = () => {
        setIsDeleteAlertOpen(false);
        setFileToDelete(null);
    };

    const handleDeleteFile = (fileToDelete: DataroomDocumentProps) => {
        const deleteFileFromDocuments = (docs: DataroomDocumentProps[], targetId: number): DataroomDocumentProps[] => {
        return docs.reduce((acc, doc) => {
            if (doc.id === targetId) {
            return acc;
            } else if (doc.contents) {
            return [...acc, { ...doc, contents: deleteFileFromDocuments(doc.contents, targetId) }];
            }
            return [...acc, doc];
        }, [] as DataroomDocumentProps[]);
        };

        const updatedFiles = deleteFileFromDocuments(files, fileToDelete.id);
        setFiles(updatedFiles);

        const updatedSelectedFiles = selectedFiles.filter(file => file.id !== fileToDelete.id);
        setSelectedFiles(updatedSelectedFiles);

        setIsShowNotification(true);
        setNotificationHeader(`${fileToDelete.label} ${fileToDelete.type.toLowerCase()} successfully deleted!`);
        setNotificationDescription(`Files will be permanently deleted after 30 days...`);
        setFileToDelete(null);
    };

    return {
        selectedFiles,
        breadcrumbs,
        isDeleteAlertOpen,
        fileToDelete,
        handleSelectFile,
        handleSelectBreadcrumb,
        handleSaveFile,
        handleDownloadFile,
        handleDeleteFileAlert,
        handleCancelDeleteFile,
        handleDeleteFile
    };
};
