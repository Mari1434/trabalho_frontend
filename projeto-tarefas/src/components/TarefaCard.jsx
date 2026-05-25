import { useState } from "react";
import { useTarefas } from "../context/useTarefas";

export default function TarefaCard({ tarefa }) {
  const { removerTarefa } = useTarefas();
  const [confirmando, setConfirmando] = useState(false);

  function handleExcluir() {
    removerTarefa(tarefa.id);
    setConfirmando(false);
  }

  return (
    <>
      <li className="break-inside-avoid mb-4">
        <article
          className="
            p-5 rounded-2xl
            shadow-sm hover:shadow-md
            border border-black/5
            transition-all duration-200
            hover:-translate-y-0.5
            group
          "
          style={{ backgroundColor: tarefa.corFundo }}
        >
          <h2 className="font-bold text-gray-800 text-base leading-snug mb-2 group-hover:text-gray-900 transition-colors">
            {tarefa.titulo}
          </h2>
          {tarefa.descricao && (
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {tarefa.descricao}
            </p>
          )}
          <footer className="mt-3 flex justify-end">
            <button
              onClick={() => setConfirmando(true)}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors sm:opacity-0 sm:group-hover:opacity-100"
              aria-label={`Excluir tarefa ${tarefa.titulo}`}
            >
              🗑️ Excluir
            </button>
          </footer>
        </article>
      </li>

      {/* Modal de confirmação */}
      {confirmando && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setConfirmando(false)}
        >
          <article
            className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-1">Excluir tarefa?</h2>
            <p className="text-sm text-gray-500 mb-6">
              "<span className="font-medium text-gray-700">{tarefa.titulo}</span>" será removida permanentemente.
            </p>
            <footer className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmando(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleExcluir}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors"
              >
                Excluir
              </button>
            </footer>
          </article>
        </div>
      )}
    </>
  );
}