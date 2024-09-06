// State Management
import { NewActivityProps } from '@/types/notifications/newActivity'
import { atom } from 'jotai'

export const newActivityAtom = atom<NewActivityProps[]>([
    { id: 1, header: 'New Clarum AI Report', description: "New Clarum AI Report 'financial-due-diligence-answers.doc' is ready for your review.", timeAgo: '1 hour ago' },
    { id: 2, header: 'File Uploaded', description: "John has uploaded the file 'financial-due-diligence-questions.doc' to the dataroom.", timeAgo: '3 hours ago' },
    { id: 3, header: 'New Company Created', description: "Manufacturing Inc. has been added to your portfolio companies.", timeAgo: '8 hours ago' },
    { id: 4, header: 'Red Flags Identified', description: "3 red flags have been identified for XYZ Corp.", timeAgo: '1 day ago' },
    { id: 5, header: 'New Dataroom Connection', description: "A new dataroom connection was created for with DropBox.", timeAgo: '1 day ago' },
])