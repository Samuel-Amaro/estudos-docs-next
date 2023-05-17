/**
 * * CARREGAMENTO INTERFACE DO USUÁRIO E STREAMING (6)
 *
 * O arquivo especial loading.js ajuda você a criar uma interface de carregamento significativa com o React Suspense Com esta convenção, você pode mostrar um estado de carregamento instantâneo do servidor enquanto o conteúdo de um segmento de rota é carregado, o novo conteúdo é trocado automaticamente assim que a renderização é concluída.
 *
 * crie interface do usuário de carregamento para um segmento e seus filhos. loading.js envolve uma página ou segmento filho em um React Suspense Boundary, mostrando a IU de carregamento durante o carregamento.
 *
 * Um estado de carregamento instantâneo é a interface do usuário de fallback que é mostrada imediatamente após a navegação.
 *
 * aqui criamos um estado de carregamento para acessar a /dashboard
 *
 *
 * @returns
 */
export default function Loading() {
  //Você pode adicionar qualquer UI dentro do Loading, incluindo um Skeleton.
  return <h2>🌀 Loading...</h2>;
}
