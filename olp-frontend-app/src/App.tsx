import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutView } from 'views/home/AboutView';
import { HomeView } from 'views/home/HomeView';
import { DashboardLayout } from 'layouts/DashboardLayout';
import 'tippy.js/dist/tippy.css';
import { Container, useTheme } from '@mui/material';
import ToggleThemeButton from 'components/ToggleThemeButton';

function App() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout viewPage={<HomeView />} />}></Route>
          <Route path="/about" element={<DashboardLayout viewPage={<AboutView />} />}></Route>
        </Routes>
      </BrowserRouter> */}
      <ToggleThemeButton />
    </Container>
  );
}

export default App;

// https://mui.com/material-ui/getting-started/templates/dashboard/
