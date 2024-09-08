interface NarrowWithTruncatedContentStackedListProps {
  list: { 
    id: number,
    header: string,
    description: string,
    timeAgo: string
  }[]
}
  
const NarrowWithTruncatedContentStackedList = ({ list }: NarrowWithTruncatedContentStackedListProps) => {
    return (
      <ul role="list" className="divide-y divide-gray-10">
        {list?.slice(0,5)?.map((item) => (
          <li key={item.id} className="flex gap-x-4 py-2">
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                <p className="text-sm font-semibold leading-5 text-gray-900">{item.header}</p>
                <p className="flex-none text-xs text-gray-600">{item.timeAgo}</p>
              </div>
              <p className="mt-0 line-clamp-2 text-sm leading-6 text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    )
}  

export default NarrowWithTruncatedContentStackedList;