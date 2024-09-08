import React from 'react';
// Hooks
import { useInProgressNotification } from '@/utils/hooks/notifications/useInProgressNotification';
// Tailwind
import { classNames } from "@/utils/tailwind/classNames";
import { PlusIcon, ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Item {
  id: number;
  name: string;
  status: 'Up to date' | 'Scanning' | 'Error';
  date: string;
  dateTime: string;
}

const statuses: Record<'Up to date' | 'Scanning' | 'Error', string> = {
  "Up to date": 'text-green-400 bg-green-400/10',
  "Scanning": 'text-yellow-400 bg-yellow-400/10',
  "Error": 'text-rose-400 bg-rose-400/10',
};

const activityItems: Item[] = [
  {
    id: 1,
    name: 'Dropbox dataroom #1',
    status: 'Up to date',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 2,
    name: 'Microsoft dataroom #2',
    status: 'Scanning',
    date: '3 hours ago',
    dateTime: '2023-01-23T09:00',
  }
]

const ConnectionsTable = () => {

  // Hooks
  const { triggerInProgressNotification } = useInProgressNotification();

  const handleRefreshDataroomConnection = (item: Item) => {
    triggerInProgressNotification(
      'Refreshing dataroom connection...',
      'Warning',
      'Dataroom connection refreshed successfully!',
      'Success'
    )
  }

  const handleRemoveDataroomConnection = (item: Item) => {
    triggerInProgressNotification(
      'Removing dataroom connection...',
      'Warning',
      'Dataroom connection removed successfully!',
      'Success'
    )
  }
  

  return (
    <div className="bg-gray-900 py-3 rounded-lg border-2">
      <div className="flex items-center">
        <div className="flex-auto">
          <h2 className="px-4 text-base font-semibold leading-7 text-white">Connections</h2>
        </div>
        <div className="mr-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Add dataroom
          </button>
        </div>
      </div>
      <table className="mt-6 w-full text-left">
        <colgroup>
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
          <col className="w-1/4" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th scope="col" className="pl-4 pr-2 font-semibold">
              Dataroom
            </th>
            <th scope="col" className="pl-2 pr-2 font-semibold">
              Status
            </th>
            <th scope="col" className="pl-2 pr-2 font-semibold">
              Last checked
            </th>
            <th scope="col" className="pl-2 pr-4 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.id}>
              <td className="pl-4 pr-2 w-1/4">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-xs font-medium leading-6 text-white">{item.name}</div>
                </div>
              </td>
              <td className="pl-2 pr-2 w-1/4">
                <div className="flex items-center">
                  <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="sm:block text-xs text-white">{item.status}</div>
                </div>
              </td>
              <td className="pl-2 pr-2 w-1/4 text-xs text-gray-400">
                  <div className="flex items-center">
                      <time dateTime={item.dateTime}>{item.date}</time>
                  </div>
              </td>
              <td className="pl-2 pr-4 w-1/4 text-xs text-gray-400">
                <div className="relative flex items-end space-x-2">
                  <ArrowPathIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-gray-400 cursor-pointer z-0" onClick={() => handleRefreshDataroomConnection(item)} />
                  <XMarkIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-gray-400 cursor-pointer z-0" onClick={() => handleRemoveDataroomConnection(item)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConnectionsTable;