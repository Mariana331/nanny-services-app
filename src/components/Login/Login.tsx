import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.login}>
      <button className={css.btn_close} aria-label="Close modal">
        <svg width={19} height={19} className={css.close_icon}>
          <use href="/sprite.svg#icon-x"></use>
        </svg>
      </button>
      <div className={css.login_info}>
        <h2 className={css.login_title}>Log In</h2>
        <p className={css.login_text}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
      </div>
      <div className={css.form}>
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="password" placeholder="Password" />
      </div>
      <button className={css.btn_login}>Log In</button>
    </div>
  );
}
