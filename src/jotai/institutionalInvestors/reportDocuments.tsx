// Types
import { ReportDocumentProps } from '@/types/institutionalInvestors/reportDocument'
// State Management
import { atom } from 'jotai'

export const reportDocumentAtom = atom<ReportDocumentProps>({
    id: 0,
    type: '',
    label: '',
    lastModified: new Date()
})

export const reportDocumentsAtom = atom<ReportDocumentProps[]>([
    { 
        id: 1,
        label: 'financial-due-diligence-qestions-clarum-ai.doc',
        type: 'File',
        lastModified: new Date(),
    },
    { 
        id: 2,
        label: 'tax-due-diligence-qestions-clarum-ai.doc',
        type: 'File',
        lastModified: new Date(),
    },
    { 
        id: 3,
        label: 'financial-due-diligence-model-clarum-ai.xlm',
        type: 'File',
        lastModified: new Date(),
    },
    { 
        id: 4,
        label: 'financial-due-diligence-report-clarum-ai.pdf',
        type: 'File',
        lastModified: new Date(),
    }
])

export const reportBreadcrumbsAtom = atom<ReportDocumentProps[]>([])

