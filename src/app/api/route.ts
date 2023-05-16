import { cookies } from "next/dist/client/components/headers";

/**
 * * MANIPULAORES DE ROTA
 * 
 * um manipulador de rota que permite criar manipuladores de request personalizados para uma determinada rota, aqui criamos uma manipulador para a / rota
 * 
 * 
 * 
 * @param request 
 */
export async function GET(request: Request) {
    //lendo cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    //definindo cookies depois de ler
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: {'Set-Cookie': `token=${token}`},
    });
}