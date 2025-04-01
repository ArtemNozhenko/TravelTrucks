import css from './CamperItem.module.css';
import { FaEuroSign } from 'react-icons/fa';
import icons from '../../images/icons.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';
import clsx from 'clsx';
import { useMemo } from 'react';

export const CamperItem = ({ data }) => {
  const formattedPrice = data.price.toFixed(2);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = useMemo(
    () => favorites.includes(data.id),
    [favorites, data.id]
  );

  const handleClick = () => {
    dispatch(toggleFavorite(data.id));
  };

  return (
    <div className={css.itemContainer}>
      <div className={css.imgContainer}>
        <img src={data.gallery[0].thumb} alt="photo" />
      </div>
      <div className={css.descriptionContainer}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>{data.name}</h2>

          <div className={css.price}>
            <p className={css.title}>
              <FaEuroSign size="18" />
              {formattedPrice}
            </p>
            <button
              className={clsx(css.heartBtn, isFavorite && css.favorite)}
              onClick={handleClick}
            >
              <svg className={css.svg}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.details}>
          <p className={css.text}>
            <svg className={css.svgStar}>
              <use href={`${icons}#icon-starpress`}></use>
            </svg>
            {data.rating}({data.reviews.length} Reviews)
          </p>

          <p className={css.text}>
            <svg className={css.svgStar}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
            {data.location}
          </p>
        </div>
        <p className={css.description}>{data.description}</p>
        <div className={css.badgesContainer}>
          {data.transmission === 'automatic' ? (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-automatic`}></use>
              </svg>
              Automatic
            </p>
          ) : data.transmission === 'manual' ? (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-automatic`}></use>
              </svg>
              Manual
            </p>
          ) : null}
          {data.engine === 'diesel' ? (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-fuel-pump`}></use>
              </svg>
              Diesel
            </p>
          ) : data.engine === 'petrol' ? (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-fuel-pump`}></use>
              </svg>
              Petrol
            </p>
          ) : null}

          {data.bathroom && (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-bathroom`}></use>
              </svg>
              Bathroom
            </p>
          )}
          {data.kitchen && (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-kitchen`}></use>
              </svg>
              Kitchen
            </p>
          )}
          {data.TV && (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-tv`}></use>
              </svg>
              TV
            </p>
          )}
          {data.radio && (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-radio`}></use>
              </svg>
              Radio
            </p>
          )}
          {data.AC && (
            <p className={css.badges}>
              <svg className={css.svgBadges}>
                <use href={`${icons}#icon-ac`}></use>
              </svg>
              AC
            </p>
          )}
        </div>
        <NavLink className={css.btn} to={`/campers/${data.id}`}>
          Show more
        </NavLink>
      </div>
    </div>
  );
};
