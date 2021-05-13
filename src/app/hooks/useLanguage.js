import { useEffect, useState } from 'react';
import EnglishMessages from '../../lang/en.json';
import PortugueseMessages from '../../lang/pt-br.json';

export function useLanguage(locale) {
  const [language, setLanguage] = useState({
    locale: 'en',
    messages: EnglishMessages,
  });

  useEffect(() => {
    switch (locale) {
      case 'en':
        setLanguage({ locale, messages: EnglishMessages });
        break;
      case 'pt':
        setLanguage({ locale, messages: PortugueseMessages });
        break;
      default:
        setLanguage({ locale: 'en', messages: EnglishMessages });
        break;
    }
  }, [locale]);

  return language;
}
