// Screens
import screens from './navigation/screens';
// State Management
import { useAtom, useAtomValue } from 'jotai';
import { authenticationGroupAtom } from './jotai/authentication';
// External Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MessageNotification from './components/Overlays/Notifications/MessageNotification';
import { isShowNotificationAtom, notificationDescriptionAtom, notificationHeaderAtom, notificationTypeAtom } from './jotai/notifications/notification';
import { useEffect } from 'react';

function App() {

  const authenticationGroup = useAtomValue(authenticationGroupAtom)

  const [isShowNotification, setIsShowNotification] = useAtom(isShowNotificationAtom)
  const [notificationHeader, setNotificationHeader] = useAtom(notificationHeaderAtom)
  const [notificationDescription, setNotificationDescription] = useAtom(notificationDescriptionAtom)
  const [notificationType, setNotificationType] = useAtom(notificationTypeAtom)

  useEffect(() => {
    if (isShowNotification && notificationType !== 'Warning') {
      setTimeout(() => {
        setIsShowNotification(false)
        setNotificationHeader('')
        setNotificationDescription('')
        setNotificationType('Success')
      }, 5000);
    }
  }, [isShowNotification, notificationType])

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