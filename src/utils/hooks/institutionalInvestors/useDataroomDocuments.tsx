import React from 'react';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
// State Management
import { useAtom } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';

const usePortfolioCompany = () => {
  const [portfolioCompany, setPortfolioCompany] = useAtom(portfolioCompanyAtom);

  const handleChangePortfolioCompany = (company: PortfolioCompanyProps | null) => {
    if (company?.id) {
      setPortfolioCompany(company);
    } else {
      setPortfolioCompany({
        id: 0,
        logo: '',
        name: '',
        initial: '',
        path: '',
        industry: '',
        transactionType: '',
        about: '',
        team: [],
        dueDiligenceProviders: []
      });
    }
  };

  return {
    portfolioCompany,
    setPortfolioCompany,
    handleChangePortfolioCompany,
  };
};

export default usePortfolioCompany;
