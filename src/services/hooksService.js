import { useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';

export const useQuery = () => new URLSearchParams(useLocation().search);

export function useAppIntl() {
  const intl = useIntl();

  const DATE_LONG_FORMAT = useMemo(
    () => ({
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
    [],
  );

  const formatDate = useCallback(
    (date, format) => {
      return intl.formatDate(date, format);
    },
    [intl],
  );

  const formatTime = useCallback(
    (date, format) => {
      return intl.formatTime(date, format);
    },
    [intl],
  );

  const formatMessage = useCallback(
    (messageDescriptor, values) => {
      return intl.formatMessage(messageDescriptor, values);
    },
    [intl],
  );

  return {
    DATE_LONG_FORMAT,
    formatDate,
    formatTime,
    formatMessage,
  };
}
