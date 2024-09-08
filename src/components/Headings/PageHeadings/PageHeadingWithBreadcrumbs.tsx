import React from 'react';
// Navigation
import screens from '@/navigation/screens';
// Tailwind
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
// External Libraries
import { useLocation } from 'react-router-dom';

interface PageHeadingWithBreadcrumbsProps {
    breadcrumbs?: [{ name: string, path: string}],
    header?: string,
    primaryActionButton?: { label: string, path: string },
    secondaryActionButton?: { label: string, path: string }
}

const PageHeadingWithBreadcrumbs = ({ header, breadcrumbs, primaryActionButton, secondaryActionButton }: PageHeadingWithBreadcrumbsProps) => {

    const location = useLocation();
    const currentPath = location.pathname;

    const currentScreen = screens?.institutionalInvestorScreens?.find((screen) => screen.path === currentPath)

    return (
        <div>
            <div>
                <nav aria-label="Back" className="sm:hidden">
                <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <ChevronLeftIcon aria-hidden="true" className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                    Back
                </a>
                </nav>
                {breadcrumbs && breadcrumbs?.length > 0 ? (
                    <nav aria-label="Breadcrumb" className="hidden sm:flex">
                        <ol role="list" className="flex items-center space-x-4">
                            {breadcrumbs.map((breadcrumb, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex items-center">
                                        {index !== 0 ? (
                                            <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                        ) : (null)}
                                        <a href={breadcrumb.path} className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{breadcrumb.name}</a>
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </nav>
                ) : (null)}
            </div>
            <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{header || currentScreen?.name}</h2>
                </div>
                <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
                    {secondaryActionButton ? (
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            {secondaryActionButton.label}
                        </button>
                    ) : (null)}
                    {primaryActionButton ? (
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {primaryActionButton.label}
                        </button>
                    ) : (null)}
                </div>
            </div>
        </div>
    )
}

export default PageHeadingWithBreadcrumbs;