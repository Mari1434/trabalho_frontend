import { Outlet, Link, useLocation } from 'react-router-dom';
import logoHorizontal from "../assets/logo-horizontal.svg";


export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/nova-tarefa', label: 'Nova Tarefa' },
    { to: '/minhas-tarefas', label: 'Minhas Tarefas' },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-blue-600 tracking-tight">
          <img src={logoHorizontal} alt="TaskBoard" className="h-12 w-auto px-6" />
          </Link>

          <nav className="flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`
                    px-4 py-2 rounded-lg text-sm transition-all duration-150
                    ${isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-500 font-medium hover:text-gray-900'
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}