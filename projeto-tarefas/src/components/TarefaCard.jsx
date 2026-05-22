export default function TarefaCard({ tarefa }) {
  return (
    <div
      className="p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
      style={{ backgroundColor: tarefa.corFundo }}
    >
      <h2 className="font-bold text-gray-800 text-lg mb-1">{tarefa.titulo}</h2>
      <p className="text-gray-600 text-sm whitespace-pre-line">{tarefa.descricao}</p>
    </div>
  );
}