import React, { useState } from "react";
import { DataroomDocumentProps } from "@/types/institutionalInvestors/dataroomDocument";
// State Management
import { useSetAtom } from "jotai";
import { isShowNotificationAtom, notificationDescriptionAtom, notificationHeaderAtom, notificationTypeAtom } from "@/jotai/notifications/notification";
// Internal Components
import AlertModalDialogue from "@/components/Overlays/ModalDialogues/Alert/AlertModalDialogue";
// Tailwind
import { ChevronLeftIcon, ChevronRightIcon, DocumentIcon, BookmarkIcon, DocumentArrowDownIcon, TrashIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/20/solid";
import { FolderIcon, PhotoIcon } from "@heroicons/react/24/solid";

interface FilesTableProps {
  files: DataroomDocumentProps[],
  setFiles: (item: any) => void,
  breadcrumbs: DataroomDocumentProps[],
  setBreadcrumbs: (item: any) => void,
  isAllowSave?: boolean
}

const FilesTable: React.FC<FilesTableProps> = ({ files, setFiles, breadcrumbs, setBreadcrumbs, isAllowSave = false }) => {

  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [fileToDelete, setFileToDelete] = useState<DataroomDocumentProps | null>(null)

  const [selectedFiles, setSelectedFiles] = useState(files)

  const setIsShowNotification = useSetAtom(isShowNotificationAtom)
  const setNotificationHeader = useSetAtom(notificationHeaderAtom)
  const setNotificationDescription = useSetAtom(notificationDescriptionAtom)
  const setNotificationType = useSetAtom(notificationTypeAtom)

  const handleSelectFile = (file: DataroomDocumentProps) => {
    if (file?.contents && file.contents?.length > 0) {
      const fileContents = file.contents

      setSelectedFiles([...fileContents])
      if (breadcrumbs?.length > 0) {
        setBreadcrumbs((prevState: DataroomDocumentProps[]) => [
          ...prevState,
          file
        ]);
      } else {
        setBreadcrumbs((prevState: DataroomDocumentProps[]) => [
          { id: 0, label: 'Home', type: 'Folder', lastModified: new Date(), isSaved: false },
          file
        ]);
      }
    } else {
      handleDownloadFile(file)
    }
  }

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
  
      setSelectedFiles((prevState) => {
        const path = findBreadcrumbPath(files, breadcrumb.id);
        if (path) {
          const breadcrumbIndex = breadcrumbs.findIndex(item => item.id === breadcrumb.id);
          setBreadcrumbs((prevState: DataroomDocumentProps[]) => {
            if (breadcrumbIndex === -1) return prevState;
            return [
              ...prevState.slice(0, breadcrumbIndex + 1)
            ];
          });

          const newSelectedFiles = findSelectedContents(files, breadcrumb.id) || [];
          setSelectedFiles(newSelectedFiles);
          return prevState;
        } else {
          return prevState;
        }
      });
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
  
    setFiles((prevDocs: DataroomDocumentProps[]) => updateFileInDocuments(prevDocs, file.id, value));
    setSelectedFiles(prevFiles => 
      prevFiles.map(selectedFile => 
        selectedFile.id === file.id ? { ...file, isSaved: value } : selectedFile
      )
    );
  }

  const handleDownloadFile = (file: DataroomDocumentProps) => {
    setNotificationHeader(`Downloading ${file.label}...`)
    setNotificationType('Warning')
    setIsShowNotification(true)

    setTimeout(() => {
      setNotificationType('Success')
      setNotificationHeader(`${file.label} ${file.type.toLowerCase()} successfully downloaded!`)      
    }, 3000);
  }

  const handleDeleteFileAlert = (file: DataroomDocumentProps) => {
    setIsDeleteAlertOpen(true)
    setFileToDelete(file)
  }

  const handleCancelDeleteFile = () => {
    setIsDeleteAlertOpen(false)
    setFileToDelete(null)
  }

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
  
    setFiles((prevDocs: DataroomDocumentProps[]) => deleteFileFromDocuments(prevDocs, fileToDelete.id));
    setSelectedFiles(prevFiles => 
      prevFiles.filter(file => file.id !== fileToDelete.id)
    );

    setIsShowNotification(true)
    setNotificationHeader(`${fileToDelete.label} ${fileToDelete.type.toLowerCase()} successfully deleted!`)
    setNotificationDescription(`Files will be permanently deleted after 30 days...`)
    setFileToDelete(null)
  };

  return (
      <div className="w-full mt-8">
        <div className="flow-root overflow-hidden">
          <div className="">
            <table className="w-full text-left">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="relative isolate py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900">
                    Name
                    <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                    <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                  </th>
                </tr>
              </thead>
              {(breadcrumbs?.length > 0) ? (
                  <div className="m-2">
                    <nav aria-label="Back" className="sm:hidden">
                      <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                        <ChevronLeftIcon aria-hidden="true" className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                        Back
                      </a>
                    </nav>
                    <nav aria-label="Breadcrumb" className="hidden sm:flex">
                      <ol role="list" className="flex items-center space-x-2">
                        {breadcrumbs.map((breadcrumb) => {
                          return (
                            <li className="cursor-pointer">
                              <div className="flex items-center">
                                {breadcrumb.id !== 0 ? (
                                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400 mr-1" />
                                ) : (null)}
                                <a onClick={() => handleSelectBreadcrumb(breadcrumb)} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                  {breadcrumb.label}
                                </a>
                              </div>
                            </li>
                          )
                        })} 
                      </ol>
                    </nav>
                  </div>
              ) : (null)}
              <tbody>
                {selectedFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-50 cursor-pointer">
                        <td className="relative py-4 pl-2 pr-2 text-sm font-medium text-gray-900" onClick={() => handleSelectFile(file)}>
                            <span className="flex items-center space-x-2">
                                {file.type === 'Folder' ? (
                                    <FolderIcon aria-hidden="true" className="h-6 w-6 text-blue-500" />
                                ) : (file.type === 'Image') ? (
                                    <PhotoIcon aria-hidden="true" className="h-6 w-6" />
                                ) : (
                                    <DocumentIcon aria-hidden="true" className="h-6 w-6" />
                                )}
                                <span>{file.label}</span>
                            </span>

                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="relative py-4 text-right text-sm font-medium">
                          {isAllowSave ? (
                            <>
                              {file.isSaved ? (
                                <a onClick={() => handleSaveFile(file, false)} className="text-indigo-900 hover:text-indigo-300 mr-4">
                                  <BookmarkIconSolid aria-hidden="true" className="h-6 w-6 inline" />
                                </a>
                              ) : (
                                <a onClick={() => handleSaveFile(file, true)} className="text-indigo-300 hover:text-indigo-900 mr-4">
                                  <BookmarkIcon aria-hidden="true" className="h-6 w-6 inline" />
                                </a>
                              )}
                            </>
                          ) : (null)}
                          <a onClick={() => handleDownloadFile(file)} className="text-indigo-300 hover:text-indigo-900 mr-4">
                            <DocumentArrowDownIcon aria-hidden="true" className="h-6 w-6 inline" />
                          </a>
                          <a onClick={() => handleDeleteFileAlert(file)} className="text-red-400 hover:text-red-900 pr-2">
                            <TrashIcon aria-hidden="true" className="h-6 w-6 inline" />
                          </a>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
            {fileToDelete && isDeleteAlertOpen ? (
              <AlertModalDialogue 
                header={`Delete this ${fileToDelete.type.toLowerCase()}`}
                description={'Deleted files will be permanately delete in 30 days'}
                isOpen={isDeleteAlertOpen}
                setIsOpen={handleCancelDeleteFile}
                primaryButton={{
                  label: 'Delete',
                  type: 'Danger',
                  onClick: () => handleDeleteFile(fileToDelete)
                }}
              />
            ) : (null)}
          </div>
        </div>
      </div>
    )
}

export default FilesTable;
  