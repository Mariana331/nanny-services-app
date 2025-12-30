import css from "./Registration.module.css";

export default function Registration() {
  return (
    <div className={css.registration}>
      <button className={css.btn_close} aria-label="Close modal">
        <svg width={19} height={19} className={css.close_icon}>
          <use href="/sprite.svg#icon-x"></use>
        </svg>
      </button>
      <div className={css.registration_info}>
        <h2 className={css.registration_title}>Registration</h2>
        <p className={css.registration_text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <div className={css.form}>
        <input className={css.input} type="text" placeholder="Name" />
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="password" placeholder="Password" />
      </div>
      <button className={css.btn_signup}>Sign Up</button>
    </div>
  );
}
