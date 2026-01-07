import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Nanny, NannyDoc } from "../types/types";

export async function getNannies(): Promise<Nanny[]> {
  const snapshot = await getDocs(collection(db, "nannies"));

  return snapshot.docs.map((doc) => {
    const data = doc.data() as NannyDoc;

    return {
      id: doc.id,
      ...data,
    };
  });
}
