import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'tippy.js/dist/tippy.css';
import "./i18n";
import DashboardLayoutBasic from 'layout/DashboardLayoutBasic';
import { routes } from 'routes/route';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, layout }) => {
          const wrapped = wrapWithLayout(layout, element);
          return <Route key={path} path={path} element={wrapped} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

function wrapWithLayout(layout: string | undefined, element: JSX.Element): JSX.Element {
  switch (layout) {
    case "dashboard":
      return <DashboardLayoutBasic>{element}</DashboardLayoutBasic>;
    default:
      return <>{element}</>
  }
}

export default App;
