import { useTarefas } from "../context/useTarefas";
import TarefaCard from "../components/TarefaCard";
import { Link } from "react-router-dom";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();

  if (!tarefas) {
    return (
      <p role="status" className="flex flex-col items-center justify-center mt-24 text-center gap-3 text-gray-500 text-sm">
        <span className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        Carregando tarefas...
      </p>
    );
  }

  if (tarefas.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center mt-24 text-center">
        <span className="text-6xl mb-4" aria-hidden="true">🗒️</span>
        <h2 className="text-xl font-bold text-gray-700 mb-2">Nenhuma tarefa ainda</h2>
        <p className="text-gray-500 mb-6">Comece criando a sua primeira anotação!</p>
        <Link
          to="/nova-tarefa"
          className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Criar Tarefa
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">
      {/* Header row */}
      <header className="flex items-center justify-between mb-6">
        <hgroup>
          <h1 className="text-2xl font-bold text-gray-800">Minhas Tarefas</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {tarefas.length} {tarefas.length === 1 ? 'nota' : 'notas'}
          </p>
        </hgroup>
        <Link
          to="/nova-tarefa"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <span aria-hidden="true">+</span>
          Nova Tarefa
        </Link>
      </header>

      {/* Masonry grid — estilo Google Keep */}
      <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 list-none">
        {tarefas.map((tarefa) => (
          <TarefaCard key={tarefa.id} tarefa={tarefa} />
        ))}
      </ul>
    </section>
  );
}