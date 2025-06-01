import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutView } from 'views/home/AboutView';
import { HomeView } from 'views/home/HomeView';
import { DashboardLayout } from 'layouts/DashboardLayout';
import 'tippy.js/dist/tippy.css';
import { Container, useTheme } from '@mui/material';
import ToggleThemeButton from 'components/ToggleThemeButton';
import "./i18n";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: 'all 0.3s ease',
        height: "100vh"
      }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout viewPage={<HomeView />} />}></Route>
          <Route path="/about" element={<DashboardLayout viewPage={<AboutView />} />}></Route>
        </Routes>
      </BrowserRouter> */}
      <ToggleThemeButton />
      {t('hello')}
      <button onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </Container>
  );
}

export default App;

// https://mui.com/material-ui/getting-started/templates/dashboard/
