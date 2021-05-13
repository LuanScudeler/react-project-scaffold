import { useMemo, useCallback, useState } from 'react';
import { APP_SESSION_STORAGE_KEY } from 'services/constantsService';

export function useSessionProvider() {
  const [session, setSession] = useState({});

  const setPersistedSession = useCallback((newSession) => {
    setSession((prevSession) => {
      const sessionState = { ...prevSession, ...newSession };
      localStorage.setItem(
        APP_SESSION_STORAGE_KEY,
        JSON.stringify(sessionState),
      );
      return sessionState;
    });
  }, []);

  const restoreSession = useCallback(
    (storagedSession) => setSession(storagedSession),
    [],
  );

  const sessionProviderValue = useMemo(
    () => ({
      session,
      setPersistedSession,
      restoreSession,
    }),
    [restoreSession, session, setPersistedSession],
  );

  return { session, sessionProviderValue };
}
