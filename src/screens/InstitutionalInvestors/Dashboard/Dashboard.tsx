import React from 'react';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import NarrowWithTruncatedContentStackedList from '@/components/Lists/Stacked/NarrowWithTruncatedContent/NarrowWithTruncatedContentStackedList';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading/SimpleSectionHeading';
import { useAtomValue } from 'jotai';
import { portfolioCompaniesAtom, portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import HorizontalLinkCardsGridList from '@/components/Lists/GridLists/HorizontalLinkCardsGridList/HorizontalLinkCardsGridList';
import usePortfolioCompany from '@/utils/hooks/institutionalInvestors/usePortfolioCompany';
import useRedirect from '@/utils/hooks/navigation/useRedirect';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
import { newActivityAtom } from '@/jotai/notifications/activity';

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
                path: company.initial
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
            <div className="flex flex-col lg:flex-row lg:space-x-10">
                <div className="flex-1 min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] mt-2">
                    <SimpleSectionHeading header={'Recent activity'} />
                    <NarrowWithTruncatedContentStackedList list={newActivity} />
                </div>
                <div className="flex-1 min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] mt-2">
                    <SimpleSectionHeading header={'My portfolio'} />
                    <HorizontalLinkCardsGridList list={list} onClick={onClick} />
                </div>
            </div>
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsDashboardScreen;