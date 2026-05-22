import { useTarefas } from "../context/TarefaContext";
import TarefaCard from "../components/TarefaCard";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();
  
  if (!tarefas) {
    return <p className="text-gray-500 mt-8 text-center">Carregando tarefas...</p>;
  }

  if (tarefas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-16 text-center">
        <span className="text-5xl mb-4">🗒️</span>
        <p className="text-gray-500 text-lg">Nenhuma anotação encontrada.</p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Minhas Tarefas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tarefas.map((tarefa) => (
          <TarefaCard key={tarefa.id} tarefa={tarefa} />
        ))}
      </div>
    </section>
  );
}