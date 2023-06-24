import Link from "next/link";
import styles from "./styles.module.css"; //inclui CSS em nivel de componente

/**
 * * PÁGINAS E LAYOUTS (2)
 *
 * Um layout é uma interface do usuário compartilhada entre várias páginas. Na navegação, os layouts preservam o estado, permanecem interativos e não são renderizados novamente. Os layouts também podem ser aninhados.
 *
 * o layout definido abaixo e definido para um segmento especifico pertence ao segmento de rota /dashboard, sera compartilhado em todas as paginas desse segmento, exportamos um layout padrão exportando um componente react de layout.js
 *
 * layout por padrão e um componente de servidor, um layout.tsx arquivo envolve um page.tsx arquivo do mesmo segmento de rota
 *
 * crie uma interface do usuário compartilhada para um segmento e seus filhos. Um layout envolve uma página ou um segmento filho.
 */
export default function DashboardLayout({
  children, // será uma página ou layout aninhado, Os componentes de layout devem aceitar e usar um children prop. Durante a renderização, children será preenchido com os segmentos de rota que o layout está agrupando. Estes serão principalmente o componente de um Layout filho (se existir) ou Page , mas também podem ser outros arquivos especiais, como Loading ou Error , quando aplicável.
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.dashboard}>
      {/*Inclua a interface do usuário compartilhada aqui, por exemplo um cabeçalho ou barra lateral*/}
      <nav>
        <ul>
          <li>
            {/** *
             * Ligando e Navegando (3) * * navegando entre rotas usando o
              Link componente, que fornece navegação do lado do cliente entre
            rotas, principal maneira de navegar entre as rotas em Next.js */}
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
