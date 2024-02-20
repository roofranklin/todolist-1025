import { useState, useEffect} from 'react'
import axios from 'axios'
function ListarTarefas() {

  const [tarefas, setTarefas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/tarefas')
    .then(response => {
      setTarefas(response.data)
    })
  }, [])
    return (
      <>
        <h1>Minha todo-list</h1>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa.id}>{tarefa.descricao}</li>
          ))}
        </ul>
      </>
    )
  }
  
  export default ListarTarefas