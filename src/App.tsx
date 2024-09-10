import { LanguageProvider } from 'contexts/language';
import { Language } from 'translations/types';
import UserRouter from './routers/UserRouter';

// Setting variable for actual page height
// (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => (
  <main>
    <LanguageProvider defaultLanguage={Language.EN}>
      <UserRouter />
    </LanguageProvider>
  </main>
);

export default App;
