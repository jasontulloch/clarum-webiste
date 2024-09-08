import React from 'react';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
// State Management
import { useAtomValue } from 'jotai';
import { portfolioCompaniesAtom, } from '@/jotai/institutionalInvestors/portfolioCompanies';
import { newActivityAtom } from '@/jotai/notifications/activity';
// Hooks
import usePortfolioCompany from '@/utils/hooks/institutionalInvestors/usePortfolioCompany';
import useRedirect from '@/utils/hooks/navigation/useRedirect';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import NarrowWithTruncatedContentStackedList from '@/components/Lists/Stacked/NarrowWithTruncatedContentStackedList';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading';
import HorizontalLinkCardsGridList from '@/components/Lists/GridLists/HorizontalLinkCardsGridList';

const InstitutionalInvestorsDashboardScreen = () => {

    // Hooks
    const { portfolioCompany, handleChangePortfolioCompany } = usePortfolioCompany();
    const handleRedirect = useRedirect();

    // Local State
    const portfolioCompanies = useAtomValue(portfolioCompaniesAtom)
    const list = portfolioCompanies.map((company) => {
        return {
            header: company.name,
            image: {
                type: 'Logo' as 'Logo',
                path: company.initial === '' ? company.name.slice(0,2) : company.initial

            },
            isActive: company.id === portfolioCompany.id,
            ...company
        }
    })

    const newActivity = useAtomValue(newActivityAtom)

    const onClick = (company: PortfolioCompanyProps) => {
        handleChangePortfolioCompany(company)
        handleRedirect('/documents')
    }

    return (
        <ScreenLayout>
            <SimpleSectionHeading header={'Institutional investor portal'} size={'h1'} />
            <div className="flex flex-col lg:flex-row lg:space-x-10">
                <div className="flex-1 min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] mt-2">
                    <SimpleSectionHeading header={'Recent activity'} />
                    <NarrowWithTruncatedContentStackedList list={newActivity} />
                </div>
                <div className="flex-1 min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] mt-2">
                    <SimpleSectionHeading header={'My portfolio'} />
                    <div className="mt-2">
                        <HorizontalLinkCardsGridList list={list} onClick={onClick} />
                    </div>
                </div>
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsDashboardScreen;