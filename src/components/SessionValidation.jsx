import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import { sessionContext } from 'services/contextService';
import { APP_SESSION_STORAGE_KEY } from 'services/constantsService';
import Login from 'routes/login/Login';
import 'moment-timezone';

const SessionValidation = (props) => {
  const { session, restoreSession } = useContext(sessionContext);
  const sessionData = localStorage.getItem(APP_SESSION_STORAGE_KEY);

  useEffect(() => {
    if (sessionData) {
      const sessionDataParsed = JSON.parse(sessionData);

      moment.tz.setDefault(sessionDataParsed.timeZone);
      restoreSession(sessionDataParsed);
    }
  }, [sessionData, restoreSession]);

  return session?.authToken ? props.children : <Login />;
};

export default SessionValidation;
