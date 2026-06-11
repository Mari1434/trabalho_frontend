import { Link } from 'react-router-dom';
import { PenLine, LayoutDashboard, NotebookPen, FolderOpen, Zap } from 'lucide-react';
import logoVertical from "../assets/logo-vertical.svg";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

      <div className="flex flex-col items-center mb-8">
        <img src={logoVertical} alt="TaskBoard" className="w-50 -mt-3" />
        <span className="text-5xl font-bold text-blue-600 tracking-tight -mt-5">
          Task<span className="text-blue-700">Board</span>
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
        Organize suas ideias <br className="hidden sm:block" />
        <span className="text-blue-600">em um só lugar</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
        Aumente sua produtividade gerenciando suas tarefas de forma simples e intuitiva.
        Crie, organize e acompanhe seu progresso diariamente.
      </p>

      <menu className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-16 list-none p-0 m-0">
        <li>
          <Link
            to="/nova-tarefa"
            className="flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
          >
            <PenLine className="w-4 h-4" aria-hidden="true" />
            Criar Nova Tarefa
          </Link>
        </li>
        <li>
          <Link
            to="/minhas-tarefas"
            className="flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-blue-600 bg-white border border-blue-300 hover:bg-blue-50 rounded-xl shadow-sm transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
            Ver Meu Painel
          </Link>
        </li>
      </menu>

      <div className="w-full flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Por que usar o TaskBoard?
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left w-full">
        {[
          { Icon: NotebookPen, title: 'Crie Notas', desc: 'Registre suas ideias instantaneamente antes que elas escapem da mente.' },
          { Icon: FolderOpen,  title: 'Organize',   desc: 'Mantenha tudo categorizado e priorizado no seu painel de trabalho.' },
          { Icon: Zap,         title: 'Produza',    desc: 'Foque apenas no que importa e veja sua produtividade decolar.' },
        ].map(({ Icon, title, desc }) => (
          <li
            key={title}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-1">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}