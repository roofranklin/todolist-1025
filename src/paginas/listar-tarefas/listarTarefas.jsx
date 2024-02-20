import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function ListarTarefas() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/tarefas')
    .then(response => {
      setTarefas(response.data)
    })
  }, [])

  const excluirTarefa = (id) => {
    axios.delete(`http://localhost:3000/tarefas/${id}`)
    .then(() => {
      setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
      alert('Tarefa excluída com sucesso!')
    })
  }

  const MarcarComoFinalizada = (id) => {
    axios.patch(`http://localhost:3000/tarefas/${id}`, { finalizado: true })
    .then(() => {
      const tarefasAtualizadas = tarefas.map(tarefa => {
        if (tarefa.id === id) {
          return { ...tarefa, finalizado: true }
        }
        return tarefa
      })
      setTarefas(tarefasAtualizadas)
    })
  }
    return (
      <>
        <h1>Minha todo-list</h1>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa.id}>
              <input
                type="checkbox"
                checked={tarefa.finalizado}
                onChange={() => MarcarComoFinalizada(tarefa.id)}
              />
              <span style={{ textDecoration: tarefa.finalizado ? 'line-through' : 'none' }}>
                {tarefa.descricao}
              </span>
              <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <Link to={'/adicionar-tarefa'}>Adicionar nova tarefa</Link>
      </>
    )
  }
  
  export default ListarTarefas