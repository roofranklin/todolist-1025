import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdicionarTarefa from './paginas/adicionar-tarefa/adicionarTarefa'
import ListarTarefas from './paginas/listar-tarefas/listarTarefas'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListarTarefas />} />
        <Route path="/adicionar-tarefa" element={<AdicionarTarefa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
