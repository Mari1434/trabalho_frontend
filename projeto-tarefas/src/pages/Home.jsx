import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

      {/* Hero */}
      <span className="text-6xl mb-6" aria-hidden="true">📋</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
        Organize suas ideias <br className="hidden sm:block" />
        <span className="text-blue-600">em um só lugar</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
        Aumente sua produtividade gerenciando suas tarefas de forma simples e intuitiva.
        Crie, organize e acompanhe seu progresso diariamente.
      </p>

      {/* CTAs */}
      <menu className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-20 list-none p-0 m-0">
        <li>
          <Link
            to="/nova-tarefa"
            className="block px-8 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
          >
            ✏️ Criar Nova Tarefa
          </Link>
        </li>
        <li>
          <Link
            to="/minhas-tarefas"
            className="block px-8 py-3 text-base font-semibold text-blue-600 bg-white border border-blue-300 hover:bg-blue-50 rounded-xl shadow-sm transition-colors"
          >
            🗂️ Ver Meu Painel
          </Link>
        </li>
      </menu>

      {/* Features */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left w-full">
        {[
          { icon: '📝', title: 'Crie Notas', desc: 'Registre suas ideias instantaneamente antes que elas escapem da mente.' },
          { icon: '🗂️', title: 'Organize', desc: 'Mantenha tudo categorizado e priorizado no seu painel de trabalho.' },
          { icon: '🚀', title: 'Produza', desc: 'Foque apenas no que importa e veja sua produtividade decolar.' },
        ].map(({ icon, title, desc }) => (
          <li
            key={title}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="block text-3xl mb-3" aria-hidden="true">{icon}</span>
            <h3 className="font-bold text-gray-800 text-base mb-1">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}