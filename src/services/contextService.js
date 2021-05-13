import React from 'react';

export const defaultSession = { authToken: '', userId: '', facilityId: '' };

export const sessionContext = React.createContext({
  session: defaultSession,
  setSession: () => {},
});
