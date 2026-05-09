import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CriarTarefa from './pages/CriarTarefa';
import ListaTarefas from './pages/ListaTarefas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nova-tarefa" element={<CriarTarefa />} />
          <Route path="minhas-tarefas" element={<ListaTarefas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;