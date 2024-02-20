import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdicionarTarefa() {

  const [tarefa, setTarefa] = useState({
    descricao: ''
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    setTarefa({
      ...tarefa,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const response = axios.post('http://localhost:3000/tarefas', tarefa);
    console.log(response.data);
    alert('Nova tarefa adicionada com sucesso!');
    navigate('/');
  }

    return (
      <>
        <h1>Adicionar nova tarefa</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Digite sua tarefa:
            <input type="text" name="descricao" value={tarefa.descricao} onChange={handleChange} />
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </>
    )
  }
  
  export default AdicionarTarefa