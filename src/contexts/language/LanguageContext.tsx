import { Loader } from '@insurely/ui';
import UserContext from 'contexts/user/UserContext';
import { usePrevious } from 'hooks';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import utils from 'services/utils';

import { Language, Messages } from 'translations/types';
import { importMessages } from 'translations/utils';

type LanguageProps = {
  defaultLanguage: Language;
  language: Language;
};

export type LanguageContextType = [LanguageProps, React.Dispatch<React.SetStateAction<Language>>];

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

const LanguageProvider = ({ children, defaultLanguage }: { children: ReactNode; defaultLanguage: Language }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [messages, setMessages] = useState<Messages>();
  const prev = usePrevious(language);
  const { config } = useContext(UserContext);
  const languageContextValue: LanguageContextType = useMemo(
    () => [{ language, defaultLanguage }, setLanguage],
    [language],
  );

  useEffect(() => {
    const language = utils.getConfigItem(config).language;
    setLanguage(language);
  }, [config, setLanguage]);

  useEffect(() => {
    if (language !== prev && !!prev) {
      importMessages(language).then(({ messages }) => {
        setMessages(messages);
      });
    }
  }, [language]);

  if (!messages) {
    return <Loader.Content />;
  }

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <IntlProvider locale={language} messages={messages} defaultLocale={defaultLanguage}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
