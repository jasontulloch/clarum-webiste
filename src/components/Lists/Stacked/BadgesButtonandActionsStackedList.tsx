import { ObservationProps } from '@/types/institutionalInvestors/analytics'
// Hooks
import { useDangerNotification } from '@/utils/hooks/notifications/useDangerNotification'
// Tailwind
import { classNames } from '@/utils/tailwind/classNames'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const statuses = {
    'Potential adjustment': 'text-green-700 bg-green-50 ring-green-600/20',
    'Observation': 'text-yellow-600 bg-yellow-50 ring-yellow-500/10',
    'Red flag': 'text-red-800 bg-red-50 ring-red-600/20',
}

interface BadgesButtonAndActionsStackedListProps {
  list: ObservationProps[]
}

const BadgesButtonAndActionsStackedList = ({ list }: BadgesButtonAndActionsStackedListProps) => {

  // Hooks
  const { triggerDangerNotification } = useDangerNotification();

  const handleButtonNotSetup = () => {
    triggerDangerNotification('Component setup required', 'This button / component is not fully setup yet.')
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {list?.map((item) => (
        <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
              <p
                className={classNames(
                    statuses[item.status as keyof typeof statuses] || 'bg-default-class',
                    'mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                )}
            >
                {item.status}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
                <time dateTime={item.dateTime}>{item.date}</time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">{item.observation}</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <a
              className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block cursor-pointer"
              onClick={handleButtonNotSetup}
            >
              View observation<span className="sr-only">, {item.name}</span>
            </a>
            <Menu as="div" className="relative flex-none">
              <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a onClick={handleButtonNotSetup} className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50 cursor-pointer">
                    Edit<span className="sr-only">, {item.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a onClick={handleButtonNotSetup} className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50 cursor-pointer">
                    Move<span className="sr-only">, {item.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a onClick={handleButtonNotSetup} className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50 cursor-pointer">
                    Delete<span className="sr-only">, {item.name}</span>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BadgesButtonAndActionsStackedList;