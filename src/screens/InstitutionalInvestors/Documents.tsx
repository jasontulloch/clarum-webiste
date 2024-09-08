import React from 'react';
// State Management
import { useAtom } from 'jotai';
import { dataroomBreadcrumbsAtom, dataroomDocumentsAtom } from '@/jotai/institutionalInvestors/dataroomDocuments';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import DropBoxFeedback from '@/components/Feedback/DropBoxFeedback';
import ConnectionsTable from '@/components/Lists/Tables/ConnectionsTable';
import FilesTable from '@/components/Lists/Tables/FilesTable';

const InstitutionalInvestorsDataScreen = () => {

    const [dataroomDocuments, setDataroomDocuments] = useAtom(dataroomDocumentsAtom)
    const [dataroomBreadcrumbs, setDataroomBreadcrumbs] = useAtom(dataroomBreadcrumbsAtom)

    return (
        <ScreenLayout>
            <div className="flex flex-col lg:flex-row lg:flex-column lg:space-x-4">
                <div className="w-full min-w:w-1/2 xl:w-1/2">
                    <DropBoxFeedback 
                        description={"PNG, JPG, GIF up to 10MB"}
                        button={{
                            label: "Upload a file",
                            onClick: () => console.log('Upload file called')
                        }}
                    />
                </div>
                <div className="w-full min-w:w-1/2 xl:w-1/2">
                    <ConnectionsTable />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <FilesTable 
                    files={dataroomDocuments}
                    setFiles={setDataroomDocuments}
                    breadcrumbs={dataroomBreadcrumbs}
                    setBreadcrumbs={setDataroomBreadcrumbs}
                    isAllowSave={true}
                />
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsDataScreen;