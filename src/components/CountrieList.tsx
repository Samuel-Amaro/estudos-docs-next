import { Countrie } from "@/app/data";
import Link from "next/link";
import styles from "./countrielist.module.css";

export default function CountrieList({ countries }: { countries: Countrie[] }) {
  return (
    <ol>
      {countries.map((countrie, index) => (
        <li key={index} className={styles.item}>
          <Link href={`/countrie/${countrie.name.common}`}>
            {countrie.name.common}
          </Link>
        </li>
      ))}
    </ol>
  );
}
