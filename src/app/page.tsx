import Link from "next/link";
import { Countrie } from "./data";
import CountrieList from "./countrie/CountrieList";

/**
 * * BUSCA DE DADOS
 *
 * asyn e await em componentes do servidor
 *
 * busca de dados em um componente do servidor.
 *
 * No App Router pordemos buscar dados dentro de layouts ou pages ou componentes
 */
async function getData() {
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
  const data = await getData();
  return (
    <>
      <header>
        <h1>Hello, Home page!</h1>
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
        <CountrieList countries={data}/>
      </main>
    </>
  );
}
