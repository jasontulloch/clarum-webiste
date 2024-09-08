import React from 'react';
// Tailwind
import { classNames } from '@/utils/tailwind/classNames';

interface HorizontalLinkCardsGridListProps {
  list: { 
    id: number,
    header: string,
    subheader?: string,
    image: { 
      type: 'Logo' | 'Web' | 'Static',
      path: string
    },
    isActive: boolean
  }[],
  onClick: (item: any) => void;
}
  
const HorizontalLinkCardsGridList = ({ list, onClick }: HorizontalLinkCardsGridListProps) => {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((item) => (
          <div
            key={item.id}
            className={classNames(
              item.isActive
              ? "border-gray-400"
              : "border-gray-300",
              "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 cursor-pointer"
          )}
          >
            <div className="flex-shrink-0">
              {item.image.type === 'Logo' ? (
                <span className="flex h-10 w-10 rounded-full shrink-0 items-center justify-center border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                  {item.image.path}
                </span>
              ) : (
                <img alt="" src={item.image.path} className="h-10 w-10 rounded-full" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <a onClick={() => onClick(item)} className="focus:outline-none">
                <span aria-hidden="true" className="absolute inset-0" />
                <p className="text-sm font-medium text-gray-900">{item.header}</p>
                {item.subheader ? (
                  <p className="truncate text-sm text-gray-500">{item.isActive}</p>
                ) : (null)}
              </a>
            </div>
          </div>
        ))}
      </div>
    )
}

export default HorizontalLinkCardsGridList;
  