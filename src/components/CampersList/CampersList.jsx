import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors';
import { CamperItem } from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

export const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <>
      <ul className={css.list}>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperItem data={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};
