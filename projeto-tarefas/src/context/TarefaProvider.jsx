import { useEffect, useState } from "react";
import { TarefaContext } from "./TarefaContext";
import { getTarefas, criarTarefa, deletarTarefa } from "../services/api";

export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState(null);
  const [erroAPI, setErroAPI] = useState(false);

  function carregarTarefas() {
    setErroAPI(false);
    setTarefas(null);
    getTarefas()
      .then((dados) => setTarefas(dados))
      .catch(() => {
        setErroAPI(true);
        setTarefas([]);
      });
  }

  useEffect(() => {
    carregarTarefas();
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
    <TarefaContext.Provider value={{ tarefas, erroAPI, carregarTarefas, adicionarTarefa, removerTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}