import { ServerCrash, RefreshCw } from "lucide-react";

export default function ErroAPI({ onRetry }) {
  return (
    <section className="flex flex-col items-center justify-center mt-24 text-center gap-4">

      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
        <ServerCrash className="w-8 h-8 text-red-400" aria-hidden="true" />
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Servidor indisponível</h2>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          Não foi possível conectar à API. Verifique se o servidor está
          rodando com <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-xs">npm run server</code> e tente novamente.
        </p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Tentar novamente
        </button>
      )}
    </section>
  );
}