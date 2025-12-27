import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div>
      <h1 className={css.title}>Make Life Easier for the Family:</h1>
      <p className={css.text}>Find Babysitters Online for All Occasions</p>
      <button className={css.btn}>Get started</button>
    </div>
  );
}
