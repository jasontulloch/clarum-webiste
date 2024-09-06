import { useAtom } from 'jotai';
import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';

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
