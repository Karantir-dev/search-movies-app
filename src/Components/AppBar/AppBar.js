import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AppBar.module.css';

function AppBar() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          exact
          to={routes.home}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default AppBar;
