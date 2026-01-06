import css from "./Nannies.module.css";
import NanniesList from "../NanniesList/NanniesList";
import CustomSelect from "../CustomSelect/CustomSelect";

export default function Nannies() {
  return (
    <div className={css.nannies}>
      <CustomSelect />
      <NanniesList />
      <button type="button" className={css.btn}>
        Load more
      </button>
    </div>
  );
}
