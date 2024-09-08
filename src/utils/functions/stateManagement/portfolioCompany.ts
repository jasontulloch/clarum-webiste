import industriesList from '@/lists/industriesList';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';

const defaultPortfolioCompany: PortfolioCompanyProps = {
    id: 0,
    logo: '',
    name: '',
    initial: '',
    path: '',
    industry: industriesList[0].value,
    transactionType: '',
    about: '',
    team: [],
    dueDiligenceProviders: []
};

export const resetPortfolioCompany = (): PortfolioCompanyProps => ({
    ...defaultPortfolioCompany
});