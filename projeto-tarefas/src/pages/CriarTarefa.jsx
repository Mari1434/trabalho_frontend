import { useState } from "react";
import { useTarefas } from "../context/TarefaContext";

export default function CriarTarefa() {
  const { adicionarTarefa } = useTarefas();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [corFundo, setCorFundo] = useState("#f9f9a8");
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;

    await adicionarTarefa({ titulo, descricao, corFundo });

    // Reseta formulário após salvar
    setTitulo("");
    setDescricao("");
    setCorFundo("#f9f9a8");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800">Nova Tarefa</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border p-2 rounded"
        />
        <label className="flex items-center gap-2 text-gray-600">
          Cor do cartão:
          <input
            type="color"
            value={corFundo}
            onChange={(e) => setCorFundo(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Salvar Tarefa
        </button>
      </form>
    </>
  );
}