import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTarefas } from "../context/useTarefas";
import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const COR_OPTIONS = [
  { value: "#f9f9a8", label: "Amarelo" },
  { value: "#bfdbfe", label: "Azul" },
  { value: "#bbf7d0", label: "Verde" },
  { value: "#fecaca", label: "Vermelho" },
  { value: "#e9d5ff", label: "Roxo" },
  { value: "#fed7aa", label: "Laranja" },
  { value: "#f9fafb", label: "Branco" },
];

export default function CriarTarefa() {
  const { adicionarTarefa } = useTarefas();
  const navigate = useNavigate();
  const [erroEnvio, setErroEnvio] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      corFundo: "#f9f9a8",
    },
  });

  const corSelecionada = useWatch({ control, name: "corFundo" });

  async function onSubmit(dados) {
    setErroEnvio(false);
    try {
      await adicionarTarefa(dados);
      navigate("/minhas-tarefas");
    } catch {
      setErroEnvio(true);
    }
  }

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Nova Tarefa</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-5"
      >
        {erroEnvio && (
          <div
            role="alert"
            className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
          >
            <TriangleAlert className="w-4 h-4 mt-0.5 shrink-0 text-red-400" aria-hidden="true" />
            <p>
              Não foi possível salvar a tarefa. Verifique se o servidor está
              rodando e tente novamente.
            </p>
          </div>
        )}

        <p className="flex flex-col gap-1.5">
          <label htmlFor="titulo" className="text-sm font-semibold text-gray-700">
            Título <span className="text-red-500">*</span>
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Ex: Estudar React Router"
            {...register("titulo", {
              required: "O título é obrigatório.",
              maxLength: { value: 50, message: "Máximo de 50 caracteres." },
            })}
            className={`border p-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-shadow ${
              errors.titulo
                ? "border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:ring-blue-100 focus:border-blue-400"
            }`}
          />
          {errors.titulo && (
            <span className="text-red-500 text-xs font-medium">{errors.titulo.message}</span>
          )}
        </p>

        <p className="flex flex-col gap-1.5">
          <label htmlFor="descricao" className="text-sm font-semibold text-gray-700">
            Descrição
          </label>
          <textarea
            id="descricao"
            rows="4"
            placeholder="Detalhes da tarefa..."
            {...register("descricao")}
            className="border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 resize-none transition-shadow"
          />
        </p>

        <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
          <legend className="text-sm font-semibold text-gray-700 mb-2">Cor do Cartão</legend>
          <menu className="flex flex-wrap gap-2 list-none p-0 m-0">
            {COR_OPTIONS.map(({ value, label }) => (
              <li key={value}>
                <label title={label} className="relative cursor-pointer">
                  <input
                    type="radio"
                    value={value}
                    {...register("corFundo")}
                    className="sr-only"
                  />
                  <span
                    className={`
                      block w-8 h-8 rounded-full border-2 transition-all
                      ${corSelecionada === value
                        ? "border-blue-500 scale-110 shadow-md"
                        : "border-gray-300 hover:border-gray-400"
                      }
                    `}
                    style={{ backgroundColor: value }}
                  />
                </label>
              </li>
            ))}
          </menu>
        </fieldset>

        <aside
          className="p-4 rounded-xl border border-black/5 text-sm text-gray-600 italic transition-colors duration-200"
          style={{ backgroundColor: corSelecionada }}
        >
          <p className="font-semibold text-gray-700 not-italic text-base mb-1">Prévia do cartão</p>
          <p>Assim é como sua tarefa vai aparecer no mural.</p>
        </aside>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Salvando..." : "Salvar Tarefa"}
        </button>
      </form>
    </section>
  );
}