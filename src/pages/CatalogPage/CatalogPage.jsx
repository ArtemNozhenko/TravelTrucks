import { CampersList } from '../../components/CampersList/CampersList';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import css from './CatalogPage.module.css';
import { Loader } from '../../components/Layout/common/Loader/Loader';
import { selectLoading } from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <main className={css.main}>
        <section>
          <FilterForm />
        </section>
        {isLoading && <Loader />}
        <section className={css.catalog}>
          <CampersList />
          <LoadMoreBtn />
        </section>
      </main>
    </>
  );
};

export default CatalogPage;
