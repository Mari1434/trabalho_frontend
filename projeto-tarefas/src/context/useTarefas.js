import { useContext } from "react";
import { TarefaContext } from "./TarefaContext";

export function useTarefas() {
  return useContext(TarefaContext);
}