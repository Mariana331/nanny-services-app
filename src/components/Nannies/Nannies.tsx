import css from "./Nannies.module.css";
import NanniesList from "../NanniesList/NanniesList";
import CustomSelect from "../CustomSelect/CustomSelect";
import { getNannies } from "../../services/nannies";
import type { Nanny } from "../../types/types";
import { useEffect, useState } from "react";

export default function Nannies() {
  const [nannies, setNannies] = useState<Nanny[] | null>(null);

  useEffect(() => {
    async function fetchNannies() {
      try {
        const data = await getNannies();
        setNannies(data);
      } catch (error) {
        console.error("Error fetching nannies:", error);
        setNannies([]);
      }
    }

    fetchNannies();
  }, []);

  if (nannies === null) {
    return <p>Loading nannies...</p>;
  }

  return (
    <div className={css.nannies}>
      <CustomSelect />
      <NanniesList nannies={nannies} />
      <button type="button" className={css.btn}>
        Load more
      </button>
    </div>
  );
}
