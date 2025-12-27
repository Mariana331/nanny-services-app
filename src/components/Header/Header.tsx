import css from "./Header.module.css";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to="/" aria-label="Home" className={css.logo_text}>
          Nanny.Services
        </Link>
      </div>
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
          <li>
            <Registration />
          </li>
        </ul>
      </nav>
    </div>
  );
}
