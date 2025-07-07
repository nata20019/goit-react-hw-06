import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Account } from './Account';
import { LangSwitcher } from './LangSwitcher';
import { useSelector } from 'react-redux';

const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const IcedCoffee = lazy(() => import('../pages/IcedCoffe'));
const CoffeeDetails = lazy(() => import('../pages/CoffeeDetails'));

export const App = () => {
const lang = useSelector(state => state.locale.lang)

  return (
    <BrowserRouter basename="/goit-react-hw-06">
      <div>
        <LangSwitcher/>
        <Account/>
        <p><b>Selected lang {lang}</b></p>
        </div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="iced" element={<IcedCoffee />} />
          <Route path=":type/:coffeeId" element={<CoffeeDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
