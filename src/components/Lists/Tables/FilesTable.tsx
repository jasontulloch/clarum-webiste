import React from "react";
import { DataroomDocumentProps } from "@/types/institutionalInvestors/dataroomDocument";
// Hooks
import { useFileTable } from "@/utils/hooks/useTable";
// Internal Components
import AlertModalDialogue from "@/components/Overlays/ModalDialogues/AlertModalDialogue";
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

  const {
    selectedFiles,
    breadcrumbs: currentBreadcrumbs,
    isDeleteAlertOpen,
    fileToDelete,
    handleSelectFile,
    handleSelectBreadcrumb,
    handleSaveFile,
    handleDownloadFile,
    handleDeleteFileAlert,
    handleCancelDeleteFile,
    handleDeleteFile
  } = useFileTable(files, setFiles, breadcrumbs, setBreadcrumbs);

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
  