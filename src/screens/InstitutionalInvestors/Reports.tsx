import React from 'react';
// State Management
import { useAtom } from 'jotai';
import { reportBreadcrumbsAtom, reportDocumentsAtom } from '@/jotai/institutionalInvestors/reportDocuments';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import DropBoxFeedback from '@/components/Feedback/DropBoxFeedback';
import FilesTable from '@/components/Lists/Tables/FilesTable';

const InstitutionalInvestorsReportsScreen = () => {

    const [reportDocuments, setReportDocuments] = useAtom(reportDocumentsAtom)
    const [reportBreadcrumbs, setReportBreadcrumbs] = useAtom(reportBreadcrumbsAtom)

    return (
        <ScreenLayout>
            <DropBoxFeedback 
                description={"PNG, JPG, GIF up to 10MB"}
                button={{
                    label: "Upload a file",
                    onClick: () => console.log('Upload file called')
                }}
            />
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <FilesTable 
                    files={reportDocuments}
                    setFiles={setReportDocuments}
                    breadcrumbs={reportBreadcrumbs}
                    setBreadcrumbs={setReportBreadcrumbs}
                    isAllowSave={false}
                />
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsReportsScreen;