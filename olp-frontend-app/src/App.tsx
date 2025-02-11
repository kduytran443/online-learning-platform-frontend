import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutView } from 'views/home/AboutView';
import { HomeView } from 'views/home/HomeView';
import { DashboardLayout } from 'layouts/DashboardLayout';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout viewPage={<HomeView />} />}></Route>
          <Route path="/about" element={<DashboardLayout viewPage={<AboutView />} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://mui.com/material-ui/getting-started/templates/dashboard/
