import { useSelector } from 'react-redux';
import { selectOneCamper } from '../../redux/selectors';
import css from './CamperDetails.module.css';
import { FaEuroSign } from 'react-icons/fa';
import icons from '../../images/icons.svg';
import { Loader } from '../Layout/common/Loader/Loader';

export const CamperDetails = () => {
  const camper = useSelector(selectOneCamper);

  if (!camper || Array.isArray(camper) || typeof camper !== 'object') {
    return <Loader />;
  }

  const { name, price, rating, reviews, location, gallery, description } =
    camper;
  const formattedPrice = price.toFixed(2);

  return (
    <section>
      <div className={css.titleContainer}>
        <h2 className={css.title}>{name}</h2>
        <div className={css.details}>
          <p className={css.text}>
            <svg className={css.svgStar}>
              <use href={`${icons}#icon-starpress`}></use>
            </svg>
            {rating}({reviews.length} Reviews)
          </p>

          <p className={css.text}>
            <svg className={css.svgStar}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
            {location}
          </p>
        </div>

        <p className={css.price}>
          <FaEuroSign size="18" />
          {formattedPrice}
        </p>

        <ul className={css.galleryList}>
          {gallery.map((img, index) => (
            <li key={index} className={css.galleryItem}>
              <img
                className={css.itemImg}
                src={img.thumb}
                alt={`Camper ${index + 1}`}
              />
            </li>
          ))}
        </ul>

        <p className={css.description}>{description}</p>
      </div>
    </section>
  );
};
