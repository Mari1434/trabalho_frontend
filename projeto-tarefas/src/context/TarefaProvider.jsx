import { useEffect, useState } from "react";
import { TarefaContext } from "./TarefaContext";
import { getTarefas, criarTarefa, deletarTarefa } from "../services/api";

export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas().then((dados) => setTarefas(dados));
  }, []);

  async function adicionarTarefa(novaTarefa) {
    const tarefaSalva = await criarTarefa(novaTarefa);
    setTarefas((anterior) => [...anterior, tarefaSalva]);
  }

  async function removerTarefa(id) {
    await deletarTarefa(id);
    setTarefas((anterior) => anterior.filter((t) => t.id !== id));
  }

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}