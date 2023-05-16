import Link from "next/link";

/**
 * * PÁGINAS E LAYOUTS (2)
 *
 *  Use pastas aninhadas para definir uma rota e um page.js arquivo para tornar a rota acessível publicamente.
 *
 * app/dashboard/settings/page.tsx é a IU para o URL `/dashboard/settings`
 *
 * Uma página é uma interface do usuário exclusiva para uma rota.
 *
 * uma página e um componente de servidor por padrão
 * @returns
 */
export default function PageSettings() {
  return <h1>Hello, Page Settings!</h1>;
}
