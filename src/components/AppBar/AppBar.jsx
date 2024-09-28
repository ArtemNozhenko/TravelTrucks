import { Navigation } from '../Navigation/Navigation';
import logoUrl from '../../assets/logo.svg';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <img src={logoUrl} alt="logo" className={css.logo} />
      <Navigation />
    </header>
  );
};
