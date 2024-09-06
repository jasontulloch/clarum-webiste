import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
// State Management
import { useAtom } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import useRedirect from '../navigation/useRedirect';

const usePortfolioCompany = () => {
  const handleRedirect = useRedirect()

  const [portfolioCompany, setPortfolioCompany] = useAtom(portfolioCompanyAtom);

  const handleChangePortfolioCompany = (company: PortfolioCompanyProps | null) => {
    if (company?.id) {
      handleRedirect('/documents')
      setPortfolioCompany(company);
    } else {
      setPortfolioCompany({
        id: 0,
        logo: '',
        name: '',
        initial: '',
        path: '',
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
