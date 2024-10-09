import { FilterForm } from '../../components/FilterForm/FilterForm';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <main className={css.main}>
      <FilterForm />
    </main>
  );
};

export default CatalogPage;
