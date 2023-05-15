/**
 * * PÁGINAS E LAYOUTS (2)
 *
 * Um layout é uma interface do usuário compartilhada entre várias páginas. Na navegação, os layouts preservam o estado, permanecem interativos e não são renderizados novamente. Os layouts também podem ser aninhados.
 *
 * o layout definido abaixo e definido para um segmento especifico pertence ao segmento de rota /dashboard, sera compartilhado em todas as paginas desse segmento, exportamos um layout padrão exportando um componente react de layout.js
 * 
 * layout por padrão e um componente de servidor, um layout.tsx arquivo envolve um page.tsx arquivo do mesmo segmento de rota
 */
export default function DashboardLayout({
  children, // será uma página ou layout aninhado
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/*Inclua a interface do usuário compartilhada aqui, por exemplo um cabeçalho ou barra lateral*/}
      <nav></nav>
      {children}
    </section>
  );
}
