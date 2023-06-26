import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import css from '../../components/layout/css/layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
