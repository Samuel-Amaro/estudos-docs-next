import { Countrie } from "@/app/data";
import Image from "next/image";

/**
 * * BUSCA DE DADOS
 *
 * asyn e await em componentes do servidor
 *
 * busca de dados em um componente do servidor.
 *
 * No App Router pordemos buscar dados dentro de layouts ou pages ou componentes
 */
async function getCountrie(name: string) {
  //busca dados de um pais especifico
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  // O valor de retorno *não* é serializado
  // Você pode retornar Date, Map, Set, etc.

  // Recomendação: lidar com erros
  if (!res.ok) {
    //Isso ativará o limite de erro `error.js` mais próximo
    throw new Error("Failed to fetch data countrie especifico");
  }

  const result = (await res.json()) as Countrie[];

  return result[0];
}

/**
 * * Rotas Dinamicas (5) - GERANDO ROTAS DINAMICAMENTE SOB DEMANDA NO MOMENTO DA REQUEST
 *
 * criando rotas a partir de dados dinamicos, usando segmentos dinamicos, que são preenchidos no mommento da request, aqui construi rotas dinamicas sob demanda no momento da request
 *
 * Segmentos dinâmicos são passados ​​como params prop para as funções layout, page, route e generateMetadata.
 *
 * app/countrie/[name]/page.tsx é a IU para o URL `/countrie/name`
 *
 * [name] e onde está o segmento dinâmico, ou dados dinamicos
 *
 */
export default async function Page({ params }: { params: { name: string } }) {
  const countrie = await getCountrie(params.name);
  return (
    <section>
      <aside>
        {countrie?.flags === undefined ? (
          "Not imagen ilustration country"
        ) : (
          <Image
            src={countrie.flags.svg}
            alt={`Ilustration flag from ${countrie.name.common}`}
            width={300}
            height={300}
          />
        )}
      </aside>
      <article>
        <h2>
          {countrie?.name === undefined
            ? "Not name country"
            : countrie.name.common}
        </h2>
        <div>
          <div>
            <p>
              <span>Native Name:</span>
              <span>
                {countrie?.name === undefined
                  ? "Not native name"
                  : countrie.name.official}
              </span>
            </p>
            <p>
              <span>Population:</span>
              <span>
                {countrie?.population === undefined
                  ? "Not population"
                  : countrie.population}
              </span>
            </p>
            <p>
              <span>Region:</span>
              <span>
                {countrie?.region === undefined
                  ? "Not region"
                  : countrie.region}
              </span>
            </p>
            <p>
              <span>Sub Region:</span>
              <span>
                {countrie?.subregion === undefined
                  ? "Not subregion"
                  : countrie.subregion}
              </span>
            </p>
            <p>
              <span>Capital:</span>
              <span>
                {countrie?.capital === undefined
                  ? "No capital"
                  : countrie.capital}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span>Top Level Domain:</span>
              <span>
                {countrie?.tld === undefined
                  ? "No Top Level Domain"
                  : countrie.tld.join(", ")}
              </span>
            </p>
            {/*<p>
              <span>Currencies:</span>
              <span>
                {countrie?.currencies === undefined
                  ? "Not currencies"
                  : countrie.currencies}
              </span>
            </p>
            <p>
              <span>Languages:</span>
              <span>
                {countrie?.languages === undefined
                  ? "Not Languages"
                  : foundLanguages(country.languages).join(", ")}
              </span>
            </p>
            */}
          </div>
        </div>
        {/*<div>
          <span>Border Countries:</span>
          {borders.length === 0 ? (
            <span>No countries on the border</span>
          ) : (
            <ul>
              {borders.map((border, index) => {
                return (
                  <li
                    className="main__Item-Border-Countri"
                    key={index}
                    tabIndex={0}
                  >
                    <Link
                      href={`/country/${border.name.common}`}
                      className="main__Item-Link-Border"
                      rel="next"
                      target="_self"
                      aria-label={`Go to details page and learn more about this ${border.name.common} country`}
                      title={`Go to details page and learn more about this ${border.name.common} country`}
                      tabIndex={0}
                    >
                      {border.name.common}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
            </div>*/}
      </article>
    </section>
  );
}
