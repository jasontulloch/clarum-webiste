// Screens
import screens from './navigation/screens';
// State Management
import { useAtomValue } from 'jotai';
import { authenticationGroupAtom } from './jotai/authentication';
// External Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
        </Router>
  );
}

export default App;