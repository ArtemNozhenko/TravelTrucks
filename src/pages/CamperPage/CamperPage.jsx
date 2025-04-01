import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Layout/common/Loader/Loader';
import { selectLoading } from '../../redux/selectors';
import css from './CamperPage.module.css';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/operations';
import { useParams } from 'react-router-dom';
import { CamperDetails } from '../../components/CamperDetails/CamperDetails';

const CamperPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <main className={css.main}>
      {isLoading ? <Loader /> : <CamperDetails />}
    </main>
  );
};

export default CamperPage;
