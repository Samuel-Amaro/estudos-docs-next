
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
export default function Home() {
  return <h1>Hello, Home page!</h1>;
}
