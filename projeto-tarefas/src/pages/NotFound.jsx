import { Link } from "react-router-dom";
import { House, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center mt-16 text-center px-4">

      <div className="relative flex items-center justify-center mb-6">
        <span className="text-[9rem] font-extrabold text-blue-100 leading-none select-none">
          404
        </span>
        <div className="absolute flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">
            <SearchX className="w-8 h-8 text-blue-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">Página não encontrada</h1>
      <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
        O endereço que você tentou acessar não existe ou foi removido.
        Verifique a URL ou volte ao início.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
      >
        <House className="w-4 h-4" aria-hidden="true" />
        Voltar ao início
      </Link>
    </section>
  );
}