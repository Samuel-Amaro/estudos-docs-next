/**
 * * CARREGAMENTO INTERFACE DO USUÁRIO E STREAMING (6)
 *
 * O arquivo especial loading.js ajuda você a criar uma interface de carregamento significativa com o React Suspense Com esta convenção, você pode mostrar um estado de carregamento instantâneo do servidor enquanto o conteúdo de um segmento de rota é carregado, o novo conteúdo é trocado automaticamente assim que a renderização é concluída.
 *
 * Um estado de carregamento instantâneo é a interface do usuário de fallback que é mostrada imediatamente após a navegação.
 *
 * aqui criamos um estado de carregamento para acessar a /dashboard
 * @returns
 */
export default function Loading() {
  //Você pode adicionar qualquer UI dentro do Loading, incluindo um Skeleton.
  return <h2>🌀 Loading...</h2>;
}
