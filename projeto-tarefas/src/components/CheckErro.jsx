import { Component } from "react";
import { TriangleAlert, RefreshCw } from "lucide-react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { temErro: false };
  }

  static getDerivedStateFromError() {
    return { temErro: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary capturou um erro:", error, info.componentStack);
  }

  render() {
    if (this.state.temErro) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">

          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
            <TriangleAlert className="w-8 h-8 text-amber-400" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">Algo deu errado</h1>
          <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
            Um erro inesperado impediu que a página carregasse corretamente.
            Recarregue e tente novamente.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Recarregar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}