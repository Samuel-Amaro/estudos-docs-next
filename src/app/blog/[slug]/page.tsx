/**
 * * Rotas Dinamicas (5) - GERANDO ROTAS ESTATICAMENTE NO TEMPO DE CONSTRUÇÃO BUILD-TIME
 * 
 * A generateStaticParams função pode ser usada em combinação com segmentos de rota dinâmicos para gerar rotas estaticamente no tempo de construção, em vez de sob demanda no momento da solicitação.
 * 
 * O principal benefício da generateStaticParams função é a recuperação inteligente de dados. Se o conteúdo for obtido dentro da generateStaticParams função usando uma fetch solicitação, as solicitações serão desduplicadas automaticamente . Isso significa que uma fetch solicitação com os mesmos argumentos em vários generateStaticParams, Layouts e Páginas será feita apenas uma vez, o que diminui o tempo de compilação.
 *
 * Retorna uma lista de `params` para preencher o segmento dinâmico [slug]
 *
 * generateStaticParams deve retornar uma array de objetos em que cada objeto representa os segmentos dinâmicos preenchidos de uma única rota.
 *
 * Cada propriedade do objeto é um segmento dinâmico a ser preenchido para a rota.
 *
 * O nome das propriedades é o nome do segmento e o valor das propriedades é o que esse segmento deve ser preenchido.
 */
export async function generateStaticParams() {
  //pode buscar dados com fetch ou swr, aqui retornamos dados estaticos para exemplo, cada objeto desse e um segmento de rota estatico criado que sera enviado para page como params, cada objeto desse ira gera uma Page estaticamente logo abaixo
  return [{ slug: "a" }, { slug: "b" }, { slug: "c" }];
}

/**
 * * Rotas Dinamicas (5) - GERANDO ROTAS DINAMICAMENTE SOB DEMANDA NO MOMENTO DA REQUEST
 *
 * criando rotas a partir de dados dinamicos, usando segmentos dinamicos, que são preenchidos no mommento da request, aqui construi rotas dinamicas sob demanda no momento da request
 *
 * Segmentos dinâmicos são passados ​​como params prop para as funções layout, page, route e generateMetadata.
 *
 * app/blog/[slug]/page.tsx é a IU para o URL `/blog/slug`
 *
 * [slug] e onde está o segmento dinâmico, ou dados dinamicos
 * 
 * * SE USAR generateStaticParams()
 * 
 * Várias versões desta página serão geradas estaticamente
 * 
 * usando o `params` retornado por `generateStaticParams`
 * 
 * - /blog/a
 * - /blog/b
 * - /blog/c
*/
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post Page</div>;
}
