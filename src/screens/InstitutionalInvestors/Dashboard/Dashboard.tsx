import React from 'react';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import NarrowWithTruncatedContentStackedList from '@/components/Lists/Stacked/NarrowWithTruncatedContent/NarrowWithTruncatedContentStackedList';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading/SimpleSectionHeading';
import { useAtomValue } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';

const InstitutionalInvestorsDashboardScreen = () => {

    const portfolioCompany = useAtomValue(portfolioCompanyAtom)

    return (
        <ScreenLayout>
            {portfolioCompany.id === 0 ? (
                <div className="flex flex-col lg:flex-row lg:space-x-10 ">
                    <div className="w-full lg:w-1/2 xl:w-1/2 mt-10">
                        <SimpleSectionHeading header={'My portfolio'} />
                        <NarrowWithTruncatedContentStackedList />
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/2 mt-10">
                        <SimpleSectionHeading header={'Recent activity'} />
                        <NarrowWithTruncatedContentStackedList />
                    </div>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsDashboardScreen;