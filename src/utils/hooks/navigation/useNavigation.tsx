import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = (route: string | null) => {
    if (route) {
      navigate(route);
    }
  };

  return handleRedirect;
};

export default useRedirect;
