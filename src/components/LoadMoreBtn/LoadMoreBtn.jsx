import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreBtn.module.css';
import {
  selectCampers,
  selectCurrentPage,
  selectFilters,
  selectTotalItems,
} from '../../redux/selectors';
import { fetchCampers } from '../../redux/operations';

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const totalItems = useSelector(selectTotalItems);

  const limit = 4;

  const totalPages = Math.ceil(totalItems / limit);

  const handleClickLoadMore = async () => {
    // console.log('LoadMore Click with page:', page + 1, 'filters:', filters);
    try {
      await dispatch(fetchCampers({ page: page + 1, ...filters })).unwrap();
    } catch (error) {
      console.error('Error fetching campers:', error);
    }
  };

  return (
    <>
      {page < totalPages && campers.length > 0 && (
        <button className={css.btn} onClick={handleClickLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
