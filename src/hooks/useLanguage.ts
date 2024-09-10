import { LanguageContext } from 'contexts/language';
import { useContext } from 'react';

const useLanguage = () => {
  const languageContext = useContext(LanguageContext);
  return languageContext
}

export default useLanguage