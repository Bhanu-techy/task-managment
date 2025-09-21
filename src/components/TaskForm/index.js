import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createTask} from '../../redux/listSlice'

const TaskForm = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
    dueDate: '',
  })

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createTask(task))
    setTask({title: '', description: '', status: '', priority: '', dueDate: ''})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="status"
          value={task.status}
          onChange={handleChange}
          placeholder="Status"
        />
        <input
          name="priority"
          value={task.priority}
          onChange={handleChange}
          placeholder="Priority"
        />
        <input
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          placeholder="Due Date"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default TaskForm
