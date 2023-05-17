import Link from "next/link";
import { Countrie } from "../data";

export default function CountrieList({
  countries,
}: {
  countries: Countrie[];
}) {
    return (
      <ul>
        {countries.map((countrie, index) => (
          <li key={index}>
            <Link href={`/countrie/${countrie.name.common}`}>
              {countrie.name.common}
            </Link>
          </li>
        ))}
      </ul>
    );
}
