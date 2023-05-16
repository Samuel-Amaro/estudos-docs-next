/**
 * * PÁGINAS E LAYOUTS (2)
 *
 *  Use pastas aninhadas para definir uma rota e um page.js arquivo para tornar a rota acessível publicamente.
 *
 * app/dashboard/page.tsx é a IU para o URL `/dashboard`
 *
 * Uma página é uma interface do usuário exclusiva para uma rota. e torna o caminho publicamente acessivel /dashboard rota
 *
 * uma página e um componente de servidor por padrão
 *
 * @returns
 */
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}
