import Link from "next/link";

/**
 * O arquivo não encontrado é usado para renderizar a interface do usuário quando a notFoundfunção é lançada em um segmento de rota. Além de servir uma interface de usuário personalizada, o Next.js também retornará um 404 código de status HTTP.
 * 
 * É bom saber : além de capturar notFound() os erros esperados, o arquivo raiz app/not-found.js também lida com URLs não correspondentes para todo o aplicativo. Isso significa que os usuários que visitam um URL que não é tratado pelo seu aplicativo verão a IU exportada pelo app/not-found.js arquivo.
 * 
 * not-found.js os componentes não aceitam nenhum adereço.
 * @returns 
 */

export default function NotFound() {
    return (
        <div><h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>
                View <Link href="/">all countries</Link>
            </p>
        </div>
    );
}