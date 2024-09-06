import React from 'react';
// State Management
import { useAtom } from 'jotai';
import { dataroomBreadcrumbsAtom, dataroomDocumentsAtom } from '@/jotai/institutionalInvestors/dataroomDocuments';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import DropBoxFeedback from '@/components/Feedback/DropBox/DropBoxFeedback';
import FullWidthWithIndicatorsTable from '@/components/Lists/Tables/FullWidthWithIndicatorsTable/FullWidthWithIndicatorsTable';
import FilesTable from '@/components/Lists/Tables/FilesTable/FilesTable';

const InstitutionalInvestorsDataScreen = () => {

    const [dataroomDocuments, setDataroomDocuments] = useAtom(dataroomDocumentsAtom)
    const [dataroomBreadcrumbs, setDataroomBreadcrumbs] = useAtom(dataroomBreadcrumbsAtom)

    return (
        <ScreenLayout>
            <div className="flex flex-col lg:flex-row lg:flex-column lg:space-x-4">
                <div className="w-full min-w:w-1/2 xl:w-1/2">
                    <DropBoxFeedback />
                </div>
                <div className="w-full min-w:w-1/2 xl:w-1/2">
                    <FullWidthWithIndicatorsTable />
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