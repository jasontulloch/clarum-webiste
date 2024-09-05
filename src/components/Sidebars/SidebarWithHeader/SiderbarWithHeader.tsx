
import { useState } from 'react'
// Internal Assets
import clarumLogo from '@/assets/images/brand/clarum-logo.png';
// Tailwind
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild } from '@headlessui/react'
import { Bars3Icon, BellIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompany';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
import screens from '@/navigation/screens';

const portfolioNavigation = [
  { id: 1, name: 'ABC, Inc.', logo: '', path: '#', initial: 'AB' },
  { id: 2, name: 'XYC Corp.', logo: '', path: '#', initial: 'XY' },
]

function classNames(...classes: (string | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
  }

const SidebarWithHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [portfolioCompany, setPorfolioCompany] = useAtom(portfolioCompanyAtom)

    const handleRedirect = (route: string | null) => {
        if (route) {
            navigate(route)
        }
    }

    const handleChangePortfolioCompany = (company: PortfolioCompanyProps | null) => {
        if (company?.id) {
            setPorfolioCompany(company)
        } else {
            setPorfolioCompany({
                id: 0,
                logo: '',
                name: '',
                initial: ''
            })
        }
    }

    console.log(portfolioCompany)

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    onClick={() => handleChangePortfolioCompany(null)}
                    alt="Clarum logo"
                    src={clarumLogo}
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {screens?.institutionInvestorScreens?.map((item) => {    
                            if (item.position === 'sideappbar') {
                                return (
                                    <li key={item.name}>
                                        <a
                                        onClick={() => handleRedirect(item.path)}
                                        className={classNames(
                                            currentPath === item.path
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                        )}
                                        >
                                        <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                        {item.name}
                                        </a>
                                    </li>
                                )
                            }                        
                        })}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6 text-gray-400">Companies</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {portfolioNavigation.map((company) => (
                          <li key={company.name}>
                            <a
                              onClick={() => handleRedirect(company.path)}
                              className={classNames(
                                currentPath === company.path
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {company.initial}
                              </span>
                              <span className="truncate">{company.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        onClick={() => handleRedirect('/settings')}
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Clarum logo"
                src={clarumLogo}
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {screens?.institutionInvestorScreens?.map((item) => {
                        if (item.position === 'sideappbar') {
                            return (
                                <li key={item.path}>
                                    <a
                                        onClick={() => handleRedirect(item.path)}
                                        className={classNames(
                                            currentPath === item.path
                                            ? 'bg-gray-800 text-white'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer',
                                        )}
                                    >
                                    <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                    {item.name}
                                    </a>
                                </li>
                            )
                        }
                    })}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Recently visited</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {portfolioNavigation?.map((company) => (
                      <li key={company.id}>
                        <a
                          onClick={() => handleChangePortfolioCompany(company)}
                          className={classNames(
                            portfolioCompany.id === company.id
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer',
                         )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {company.initial}
                          </span>
                          <span className="truncate">{company.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    onClick={() => handleRedirect('/settings')}
                    className={classNames(
                        currentPath === '/settings'
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer',
                     )}
                  >
                    <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="relative flex flex-1">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                />
                <input
                  id="search-field"
                  name="search"
                  type="search"
                  placeholder="Search..."
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500" onClick={() => handleRedirect('/notifications')}>
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {portfolioNavigation.map((company) => (
                      <MenuItem key={company.name}>
                        <a
                          onClick={() => handleChangePortfolioCompany(company)}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {company.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default SidebarWithHeader;