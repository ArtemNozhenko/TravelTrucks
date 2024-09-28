import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const CamperPage = lazy(() => import('../pages/CamperPage/CamperPage.jsx'));
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campers" element={<CatalogPage />} />
            <Route path="/campers/:id" element={<CamperPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
