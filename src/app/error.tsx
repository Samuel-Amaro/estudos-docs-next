"use client"; // Os componentes de erro devem ser componentes do cliente

import { useEffect } from "react";

/**
 * * MANIPULAÇÃO DE ERROS (7)
 *
 * A error.jsconvenção de arquivo permite que você manipule corretamente erros de tempo de execução em rotas aninhadas .
 *
 * cria interface do usuário de erro para um segmento e seus filhos. error.js envolve uma página ou segmento filho em um React Error Boundary, mostrando a IU de erro se um erro for detectado.
 *
 * aqui temos uma UI de erro para o segmento de rota /, qualuqer erro nesse segmento e mostrada essa UI
 *
 * @param param0
 * @returns
 */

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    //Registre o erro em um serviço de relatório de erros
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! Error Root</h2>
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
    </div>
  );
}
