const BASE_URL = "http://localhost:3001";

export async function getTarefas() {
  const response = await fetch(`${BASE_URL}/tarefas`);
  return response.json();
}

export async function criarTarefa(tarefa) {
  const response = await fetch(`${BASE_URL}/tarefas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return response.json();
}

export async function deletarTarefa(id) {
  await fetch(`${BASE_URL}/tarefas/${id}`, { method: "DELETE" });
}