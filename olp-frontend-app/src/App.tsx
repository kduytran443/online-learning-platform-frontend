import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'tippy.js/dist/tippy.css';
import "./i18n";
import DashboardLayoutBasic from 'layout/DashboardLayoutBasic';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';

function App() {

  return (
    <BrowserRouter>
      <DashboardLayoutBasic>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </DashboardLayoutBasic>
    </BrowserRouter>
  );
}

export default App;
