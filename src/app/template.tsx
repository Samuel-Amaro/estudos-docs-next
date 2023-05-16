/**
 * * Páginas e Layouts (2)
 * 
 * template Semelhante a layout.js, exceto que uma nova instância de componente é montada na navegação. Use layouts, a menos que precise desse comportamento.
 * 
*/
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
