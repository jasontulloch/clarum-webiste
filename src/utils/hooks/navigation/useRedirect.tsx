import { portfolioCompanyAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();
  const setPorfolioCompany = useSetAtom(portfolioCompanyAtom)

  const handleRedirect = (route: string | null) => {
    if (route) {
      if (['/settings', '/notifications'].includes(route)) {
        setPorfolioCompany((prevState) => ({
          ...prevState,
          id: 0
        }))
      }
      navigate(route);
    }
  };

  return handleRedirect;
};

export default useRedirect;
