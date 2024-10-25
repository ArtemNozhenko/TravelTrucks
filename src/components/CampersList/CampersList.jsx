import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
// import { selectCampers } from '../../redux/selectors';
import { CamperItem } from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

export const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await dispatch(fetchCampers()).unwrap();
        setCampers(items);
      } catch (error) {
        console.error('Failed to fetch campers', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperItem data={camper} />
        </li>
      ))}
    </ul>
  );
};
