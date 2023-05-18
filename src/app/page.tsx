import Link from "next/link";
import { Countrie } from "./data";
import styles from "./page.module.css"; //inclui CSS em nivel de componente

/**
 * * BUSCA DE DADOS
 *
 * nova menira de buscar e gerenciar dados no app
 *
 * usando asyn e await em componentes do servidor para buscar dados
 *
 * busca de dados em um componente do servidor.
 *
 * No App Router pordemos buscar dados dentro de layouts ou pages ou componentes
 */
async function getCountries() {
  //busca dados de todos paises do mundo
  const res = await fetch("https://restcountries.com/v3.1/all");
  // O valor de retorno *não* é serializado
  // Você pode retornar Date, Map, Set, etc.

  // Recomendação: lidar com erros
  if (!res.ok) {
    //Isso ativará o limite de erro `error.js` mais próximo
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Countrie[]>;
}

function CountrieList({ countries }: { countries: Countrie[] }) {
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

/**
 * * DEFININDO ROTAS (1)
 *
 * Page Home: serve para mostrar a IU exclusiva da / (root) rota, exporta um componente react. cria a interface usuario exclusiva de uma rota a / e torna o caminho publicamente acessivel
 *
 * * PÁGINAS E LAYOUTS (2)
 *
 * app/page.tsx é a IU para o URL `/`
 *
 * Uma página é uma interface do usuário exclusiva para uma rota.
 * @returns
 */
export default async function Home() {
  const data = await getCountries();
  return (
    <>
      <header>
        <h1>COUNTRIES</h1>
        <nav>
          <ul>
            <li>
              {/**
               * * Ligando e Navegando (3)
               *
               * navegando entre rotas usando o Link componente, que fornece navegação do lado do cliente entre rotas, principal maneira de navegar entre as rotas em Next.js
               */}
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <CountrieList countries={data} />
      </main>
    </>
  );
}
