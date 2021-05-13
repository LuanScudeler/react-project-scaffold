import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from 'routes/login/Login';
import Unauthorized from '../components/Unauthorized';
import SessionValidation from '../components/SessionValidation';
import AppRoutes from './AppRoutes';
import { sessionContext } from '../services/contextService';
import ErrorHandler from '../components/ErrorHandler';
import { mainTheme } from '../services/themeService';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage, useSessionProvider } from './hooks';
import { globalStyles } from '../global.style';

const useGlobalStyles = makeStyles(globalStyles);
const App = () => {
  useGlobalStyles();
  toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
  });
  const { session, sessionProviderValue } = useSessionProvider();
  const language = useLanguage(session.locale);

  return (
    <IntlProvider
      key={language.locale}
      defaultLocale="en"
      locale={language.locale}
      messages={language.messages}
      timeZone={session.timeZone}
    >
      <sessionContext.Provider value={sessionProviderValue}>
        <Router>
          <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <ErrorHandler>
              <Switch>
                {/* External routes */}
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/unauthorized">
                  <Unauthorized />
                </Route>
                {/* Internal routes */}
                <SessionValidation>
                  <Route path="/">
                    <AppRoutes />
                  </Route>
                </SessionValidation>
              </Switch>
            </ErrorHandler>
          </ThemeProvider>
        </Router>
      </sessionContext.Provider>
    </IntlProvider>
  );
};

export default App;
