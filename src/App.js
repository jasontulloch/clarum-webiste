// Screens
import screens from './navigation/screens';
// State Management
import { useAtomValue } from 'jotai';
import { authenticationGroupAtom } from '@/jotai/authentication';
// Hooks
import { useAutoHideNotification } from '@/utils/hooks/notifications/useAutoHideNotification';
import { useRedirectIfInvalid } from '@/utils/hooks/navigation/useRedirectIfInvalid';
// Internal Components
import MessageNotification from './components/Overlays/Notifications/MessageNotification';
// External Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // Hooks
  useRedirectIfInvalid();
  const { isShowNotification, notificationType, notificationHeader, notificationDescription, setIsShowNotification } = useAutoHideNotification();

  const authenticationGroup = useAtomValue(authenticationGroupAtom)

  return (
    <Router>
      {authenticationGroup === 'Institutional Investor' ? (
        <Routes>
          {screens?.institutionInvestorScreens?.map((screen) => {
            return (
              <Route path={screen.path} element={screen.component} />
            )
          })}
        </Routes>
      ) : (null)}
      <MessageNotification 
        isShow={isShowNotification}
        setIsShow={setIsShowNotification}
        header={notificationHeader}
        description={notificationDescription}
        type={notificationType}
      />
    </Router>
  );
}

export default App;