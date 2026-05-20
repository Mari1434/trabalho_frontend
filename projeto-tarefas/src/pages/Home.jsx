import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        Organize suas ideias em um só lugar
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8">
        Aumente sua produtividade gerenciando suas tarefas de forma simples e intuitiva. Crie, organize e acompanhe o seu progresso diariamente.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          to="/nova-tarefa"
          className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center justify-center"
        >
          Criar Nova Tarefa
        </Link>
        <Link
          to="/minhas-tarefas"
          className="w-full sm:w-auto px-8 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 rounded-lg shadow-sm transition-colors flex items-center justify-center"
        >
          Ver Meu Painel
        </Link>
      </div>

      <ul className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl w-full">
        
        <li className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <span className="block text-blue-500 text-3xl mb-4" aria-hidden="true">📝</span>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Crie Notas</h3>
          <p className="text-gray-600">Registre suas ideias instantaneamente antes que elas fujam da mente.</p>
        </li>

        <li className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <span className="block text-blue-500 text-3xl mb-4" aria-hidden="true">🗂️</span>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Organize</h3>
          <p className="text-gray-600">Mantenha tudo categorizado e priorizado no seu painel de trabalho.</p>
        </li>

        <li className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <span className="block text-blue-500 text-3xl mb-4" aria-hidden="true">🚀</span>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Produza</h3>
          <p className="text-gray-600">Foque apenas no que importa e veja a sua produtividade decolar.</p>
        </li>

      </ul>
    </section>
  );
}