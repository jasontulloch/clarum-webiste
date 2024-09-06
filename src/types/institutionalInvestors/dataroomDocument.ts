export type DataroomDocumentProps = {
    id: number,
    type: string,
    label: string,
    lastModified: Date,
    isSaved?: boolean,
    contents?: DataroomDocumentProps[]
}
