import { CampersList } from '../../components/CampersList/CampersList';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return (
    <main className={css.main}>
      <section>
        <FilterForm />
      </section>
      <section className={css.catalog}>
        <CampersList />
        <LoadMoreBtn />
      </section>
    </main>
  );
};

export default CatalogPage;
