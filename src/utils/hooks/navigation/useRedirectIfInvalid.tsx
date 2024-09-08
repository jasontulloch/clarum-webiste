import React, { useEffect } from 'react';
// State Management
import { useAtomValue } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';

export const useRedirectIfInvalid = () => {
  const portfolioCompany = useAtomValue(portfolioCompanyAtom);

  useEffect(() => {
    if (portfolioCompany?.id === 0 && !['/dashboard', '/settings', '/notifications'].includes(window.location.pathname)) {
      window.location.href = '/dashboard';
    }
  }, [portfolioCompany?.id]);
};
