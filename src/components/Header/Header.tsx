import css from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to="/" aria-label="Home" className={css.logo_text}>
          Nanny.Services
        </Link>
      </div>
      <div className={css.menu}>
        <nav className={css.nav}>
          <ul className={css.navigation}>
            <li>
              <Link className={css.nav_text} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={css.nav_text} to="/nannies">
                Nannies
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.registration}>
          <button className={css.btn_log} type="button">
            Log In
          </button>
          <button className={css.btn_registration} type="button">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}
