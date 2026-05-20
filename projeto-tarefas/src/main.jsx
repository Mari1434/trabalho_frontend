import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TarefaProvider } from "./context/TarefaContext";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarefaProvider>
      <App />
    </TarefaProvider>
  </StrictMode>
)
