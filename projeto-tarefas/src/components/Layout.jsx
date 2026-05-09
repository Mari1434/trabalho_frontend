import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="container mx-auto flex gap-6 font-semibold">
          <Link to="/" className="hover:text-blue-200 transition-colors">Início</Link>
          <Link to="/nova-tarefa" className="hover:text-blue-200 transition-colors">Nova Tarefa</Link>
          <Link to="/minhas-tarefas" className="hover:text-blue-200 transition-colors">Minhas Tarefas</Link>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}