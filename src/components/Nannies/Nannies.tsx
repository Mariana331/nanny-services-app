import css from "./Nannies.module.css";
import NanniesList from "../NanniesList/NanniesList";
export default function Nannies() {
  return (
    <div className={css.nannies}>
      <NanniesList />
      <button type="button" className={css.btn}>
        Load more
      </button>
    </div>
  );
}
