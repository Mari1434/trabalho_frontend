import { createContext, useContext, useEffect, useState } from "react";
import { getTarefas, criarTarefa } from "../services/api";

const TarefaContext = createContext();

export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas().then((dados) => setTarefas(dados));
  }, []);

  async function adicionarTarefa(novaTarefa) {
    const tarefaSalva = await criarTarefa(novaTarefa);
    setTarefas((anterior) => [...anterior, tarefaSalva]);
  }

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefaContext);
}