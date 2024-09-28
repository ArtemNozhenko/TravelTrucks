import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/campers');
  };

  return (
    <section className={css.home}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <button
          className={css.button}
          type="button"
          onClick={handleButtonClick}
        >
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
