import React from 'react';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
// State Management
import { useAtom } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
// Hooks
import useRedirect from '../navigation/useRedirect';
import { resetPortfolioCompany } from '@/utils/functions/stateManagement/portfolioCompany';

const usePortfolioCompany = () => {
  const handleRedirect = useRedirect()

  const [portfolioCompany, setPortfolioCompany] = useAtom(portfolioCompanyAtom);

  const handleChangePortfolioCompany = (company: PortfolioCompanyProps | null) => {
    if (company?.id) {
      handleRedirect('/documents')
      setPortfolioCompany(company);
    } else {
      setPortfolioCompany(resetPortfolioCompany())
    }
  };

  return {
    portfolioCompany,
    setPortfolioCompany,
    handleChangePortfolioCompany,
  };
};

export default usePortfolioCompany;
