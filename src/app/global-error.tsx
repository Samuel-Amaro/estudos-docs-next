"use client"; // Os componentes de erro devem ser componentes do cliente

import { useEffect } from "react";

/**
 * * MANIPULAÇÃO DE ERROS (7) - TRATAMENTO DE ERROS EM LAYOUTS ROOT
 *
 *  Para lidar especificamente com erros nesses componentes raiz, use uma variação de error.js call app/global-error.js localizada no app diretório raiz.
 * 
 * global-error.js é a IU de erro menos granular e pode ser considerada uma manipulação de erros "pega-tudo" para todo o aplicativo. É improvável que seja acionado com frequência, pois os componentes raiz geralmente são menos dinâmicos e outros error.js limites detectarão a maioria dos erros.
 * 
 * global-error.js substitui a raiz layout.js quando ativa e, portanto, deve definir suas próprias <html>tags <body>.
 * 
 * Ao projetar a interface do usuário de erro, você pode achar útil usar as ferramentas do desenvolvedor React para alternar manualmente os limites de erro.
 * 
 * Semelhante ao error.js, mas especificamente para detectar erros na raiz layout.js.
 *
 * @param param0
 * @returns
 */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! Global Error</h2>
        <button
          onClick={
            // Tenta recuperar tentando renderizar novamente o segmento
            //reset function que pode solicitar ao usuario que tente se recuperar do error, a function tentara renderizar novamente o contedo do limite de Error
            //Se for bem-sucedido, o componente de erro de fallback será substituído pelo resultado da nova renderização.
            () => reset()
          }
        >
          Try again
        </button>
      </body>
    </html>
  );
}
