// Types
import { DataroomDocumentProps } from '@/types/institutionalInvestors/dataroomDocument'
// State Management
import { atom } from 'jotai'

export const dataroomDocumentAtom = atom<DataroomDocumentProps>({
    id: 0,
    type: '',
    label: '',
    lastModified: new Date(),
    isSaved: false
})

export const dataroomDocumentsAtom = atom<DataroomDocumentProps[]>([
    { 
        id: 1,
        label: 'Due Diligence Questions',
        type: 'Folder',
        lastModified: new Date(),
        isSaved: false,
        contents: [
            { id: 6, label: 'financial-due-diligence-questions.doc', type: 'File', lastModified: new Date(), isSaved: false },
            { id: 7, label: 'tax-due-diligence-questions.doc', type: 'File', lastModified: new Date(), isSaved: false },
            { id: 8, label: 'legal-due-diligence-questions.doc', type: 'File', lastModified: new Date(), isSaved: false },
        ]
    },
    { 
        id: 2,
        label: 'Accounting',
        type: 'Folder',
        lastModified: new Date(),
        isSaved: false,
        contents: [
            { 
                id: 9,
                label: 'General Ledger',
                type: 'Folder',
                lastModified: new Date(),
                isSaved: false,
                contents: [
                    { id: 10, label: 'gl-jan-2024.xml', type: 'File', lastModified: new Date(), isSaved: false },
                    { id: 11, label: 'gl-feb-2024.xml', type: 'File', lastModified: new Date(), isSaved: false },
                    { id: 12, label: 'gl-mar-2024.xml', type: 'File', lastModified: new Date(), isSaved: false },        
                ]
            },
            { id: 13, label: '2024-forecast.xml', type: 'File', lastModified: new Date(), isSaved: false },
            { id: 14, label: '2023-historical-pl.xml', type: 'File', lastModified: new Date(), isSaved: false },
        ]
    },
    { 
        id: 3,
        label: 'Tax',
        type: 'Folder',
        lastModified: new Date(),
        isSaved: false,
        contents: [
            { id: 7, label: 'tax-return-2022.doc', type: 'File', lastModified: new Date(), isSaved: false },
            { id: 8, label: 'tax-return-2023.doc', type: 'File', lastModified: new Date(), isSaved: false },
        ]
    },
    { id: 4, label: 'headcount.doc', type: 'File', lastModified: new Date(), isSaved: false },
    { id: 5, label: 'site-a.png', type: 'Image', lastModified: new Date(), isSaved: false },
])

export const dataroomBreadcrumbsAtom = atom<DataroomDocumentProps[]>([])
