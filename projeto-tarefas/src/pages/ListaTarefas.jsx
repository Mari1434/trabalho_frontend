import { useTarefas } from "../context/TarefaContext";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();
  
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800">Minhas Tarefas</h1>
      <ul className="mt-4 flex flex-col gap-3">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="p-4 rounded shadow"
            style={{ backgroundColor: tarefa.corFundo }}
          >
            <h2 className="font-bold text-gray-800">{tarefa.titulo}</h2>
            <p className="text-gray-600">{tarefa.descricao}</p>
          </li>
        ))}
      </ul>
    </>
  );
}