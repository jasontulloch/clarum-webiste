import React from 'react';
// State Management
import { useSetAtom } from "jotai"
import { isShowNotificationAtom, notificationDescriptionAtom, notificationHeaderAtom, notificationTypeAtom } from "@/jotai/notifications/notification"
// Hooks
import useRedirect from "@/utils/hooks/navigation/useRedirect"
// Tailwind
import { classNames } from "@/utils/tailwind/classNames"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

interface ListItemProps {
    name: string,
    path: string,
    isActive: boolean,
    isSetup: boolean
}

interface VerticalNavigationListProps {
    list: ListItemProps[]
}

const VerticalNavigationList = ({ list }: VerticalNavigationListProps) => {
    const handleRedirect = useRedirect();

    const setIsShowNotification = useSetAtom(isShowNotificationAtom)
    const setNotificationHeader = useSetAtom(notificationHeaderAtom)
    const setNotificationDescription = useSetAtom(notificationDescriptionAtom)
    const setNotificationType = useSetAtom(notificationTypeAtom)

    const handleSelectListItem = (item: ListItemProps) => {
        if (item.isSetup) {
            handleRedirect(item.path)
        } else {
            setIsShowNotification(true)
            setNotificationHeader('Page setup required')
            setNotificationDescription('This page has not been setup yet')
            setNotificationType('Danger')
        }
    }

    return (
      <nav aria-label="Sidebar" className="flex flex-1 flex-col">
        <ul role="list" className="-mx-2 space-y-1">
          {list.map((item) => (
            <li key={item.name}>
              <a
                onClick={() => handleSelectListItem(item)}
                className={classNames(
                  item.isActive ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                  'group flex justify-between items-center gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 cursor-pointer',
                  )}
              >
                <span>{item.name}</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default VerticalNavigationList;
  