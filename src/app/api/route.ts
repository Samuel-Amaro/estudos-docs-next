import { cookies } from "next/dist/client/components/headers";

/**
 * * MANIPULADORES DE ROTA
 * 
 * Manipuladores de rota permitem que você crie manipuladores de solicitação(request) personalizados para uma determinada rota usando o Web Request e Resposta APIs.
 * 
 * um manipulador de rota que permite criar manipuladores de request personalizados para uma determinada rota, aqui criamos uma manipulador para a / rota
 * 
 * Um arquivo de rota permite que você crie manipuladores de solicitação(request) personalizados para uma determinada rota. Os seguintes métodos HTTP são suportados: GET, POST, PUT, PATCH, DELETE, HEAD e OPTIONS
 * 
 * É bom saber : os manipuladores de rota estão disponíveis apenas dentro do app diretório. Você não precisa usar API Routes ( pages) e Route Handlers ( app) juntos, pois os Route Handlers devem ser capazes de lidar com todos os casos de uso. 
 * 
 * @param request : O request objeto é um objeto NextRequest , que é uma extensão do Web RequestAPI. NextRequest dá a você mais controle sobre a solicitação recebida, incluindo acesso fácil cookies e um objeto de URL estendido e analisado nextUrl.
 * 
 * aqui criamos um manipulador de request personalizado para a rota /, aqui usamos o metodo HTTP GET, assim que for feito uma request usando metodo http GET, manipulamos a request para retornar uma response com status 200 e dados json
 */
export async function GET(request: Request) {
    //lendo cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    //definindo cookies depois de ler
    //Os manipuladores de rota podem estender a API de resposta da Web retornando um NextResponse objeto. Isso permite que você defina facilmente cookies, cabeçalhos, redirecione e reescreva. 
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: {'Set-Cookie': `token=${token}`},
    });
}