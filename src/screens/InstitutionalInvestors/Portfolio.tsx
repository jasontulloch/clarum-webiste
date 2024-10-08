import React from 'react';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import HorizontalLinkCardsGridList from '@/components/Lists/GridLists/HorizontalLinkCardsGridList';
import { useAtomValue } from 'jotai';
import { portfolioCompaniesAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import usePortfolioCompany from '@/utils/hooks/institutionalInvestors/usePortfolioCompany';
import useRedirect from '@/utils/hooks/navigation/useRedirect';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';

const InstitutionalInvestorsPortfolioScreen = () => {
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

    const onClick = (company: PortfolioCompanyProps) => {
        handleChangePortfolioCompany(company)
        handleRedirect('/documents')
    }

    return (
        <ScreenLayout>
            <HorizontalLinkCardsGridList list={list} onClick={onClick} />
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsPortfolioScreen;