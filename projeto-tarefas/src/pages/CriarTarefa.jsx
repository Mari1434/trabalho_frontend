import { useForm } from "react-hook-form";
import { useTarefas } from "../context/TarefaContext";
import { useNavigate } from "react-router-dom";

export default function CriarTarefa() {
  const { adicionarTarefa } = useTarefas();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      corFundo: "#f9f9a8",
    },
  });

  async function onSubmit(dados) {
    await adicionarTarefa(dados);
    navigate("/minhas-tarefas");
  }

  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Nova Tarefa</h1>

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-4"
      >
        
        <div className="flex flex-col gap-1">
          <label htmlFor="titulo" className="font-semibold text-gray-700">Título *</label>
          <input
            id="titulo"
            type="text"
            placeholder="Ex: Estudar React Router"
            {...register("titulo", { 
              required: "O título é obrigatório.",
              maxLength: { value: 50, message: "O título deve ter no máximo 50 caracteres." }
            })}
            className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
              errors.titulo ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
          {errors.titulo && <span className="text-red-500 text-sm font-medium">{errors.titulo.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="descricao" className="font-semibold text-gray-700">Descrição</label>
          <textarea
            id="descricao"
            rows="4"
            placeholder="Detalhes da tarefa..."
            {...register("descricao")}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="corFundo" className="font-semibold text-gray-700">Cor do Cartão</label>
          <select
            id="corFundo"
            {...register("corFundo")}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="#f9f9a8">Amarelo Claro</option>
            <option value="#bfdbfe">Azul Claro</option>
            <option value="#bbf7d0">Verde Claro</option>
            <option value="#fecaca">Vermelho Claro</option>
            <option value="#e9d5ff">Roxo Claro</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Salvar Tarefa
        </button>
      </form>
    </section>
  );
}