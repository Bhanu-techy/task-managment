import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/listSlice'
import Card from '../Card'
import './index.css'

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.list.data)

  const [priority, setPriority] = useState('')
  const [dueDate, setDuedate] = useState('')
  const today = new Date().toISOString().split('T')[0]

  const [newtask, setTask] = useState({})
  const [title, setTitle] = useState('')
  const [inputpriority, setInppriority] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState("")

  const onChangeTitle = event =>{
    setTitle(event.target.value)
  }

  const onChangePriority = event => {
    setInppriority(event.target.value)
  }

  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const onAddTask = (event, status) => {
    event.preventDefault()
    const task = {
      title,
      dueDate: today,
      priority: inputpriority,
      status,
      description,
    }
    setTask(task)
    setDescription("")
    setInppriority("")
    setTitle("")
  }

  const onChangeFilter = event => {
    setPriority(event.target.value)
  }

  let filteredList = todos.filter(each => {
    if (dueDate === 'UPCOMING') {
      return each.dueDate > today
    }
    if (dueDate === 'OVERDUE') {
      return each.dueDate <= today
    }
    return true
  })

  filteredList = filteredList.filter(each => {
    if (priority !== '') {
      return each.priority === priority.toLowerCase()
    }
    return filteredList
  })

  console.log(filteredList)

  const onChangeDate = event => {
    setDuedate(event.target.value)
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const pendingList = filteredList.filter(each => each.status === 'pending')
  const completedList = filteredList.filter(each => each.status === 'completed')
  const inprogressList = filteredList.filter(
    each => each.status === 'in-progress',
  )

  console.log(newtask)

  return (
    <div className="home-container">
      <div className="container">
        <h1>Dashboard</h1>
        <select onChange={onChangeFilter}>
          <option value="HIGH">high</option>
          <option value="LOW">low</option>
          <option value="MEDIUM">medium</option>
        </select>
        <select onChange={onChangeDate}>
          <option value="UPCOMING">upcoming</option>
          <option value="OVERDUE">over due</option>
        </select>
      </div>
      <div className="card-container">
        {pendingList.length > 0 && (
          <div className="card">
            <p>To Do</p>
            <ul>
              {pendingList.map(each => (
                <Card data={each} key={each.id} />
              ))}
            </ul>
            <form onSubmit={() =>onAddTask("in-progress")}>
              <div className="inputdiv">
                <label htmlFor="title">title:</label>
                <input type="text" id="title" />
              </div>
              <div className="inputdiv">
                <label htmlFor="description">description:</label>
                <input htmlFor="description" type="text" />
              </div>
              
              <div className="inputdiv">
                <lable htmlFor="priority">priority:</lable>
                <input id="priority" type="text" />
              </div>
              <button type="submit">Add Task</button>
            </form>
          </div>
        )}
        {completedList.length > 0 && (
          <div className="card">
            <p>completed</p>

            <ul>
              {completedList.map(each => (
                <Card data={each} key={each.id} />
              ))}
            </ul>
            <form onSubmit={() =>onAddTask("in-progress")}>
              <div className="inputdiv">
                <label htmlFor="title">title:</label>
                <input type="text" id="title" />
              </div>
              <div className="inputdiv">
                <label htmlFor="description">description:</label>
                <input htmlFor="description" type="text" />
              </div>
              <div className="inputdiv">
                <lable htmlFor="priority">priority:</lable>
                <input id="priority" type="text" />
              </div>
              <button type="submit">Add Task</button>
            </form>
          </div>
        )}
        {inprogressList.length > 0 && (
          <div className="card">
            <p>on Progress</p>
            <ul>
              {inprogressList.map(each => (
                <Card data={each} key={each.id} />
              ))}
            </ul>
            <form onSubmit={() =>onAddTask("in-progress")}>
              <div className="inputdiv">
                <label htmlFor="title">title:</label>
                <input type="text" id="title" onChange={onChangeTitle} />
              </div>
              <div className="inputdiv">
                <label htmlFor="description">description:</label>
                <input htmlFor="description" type="text" onChange={onChangeDescription}/>
              </div>
              <div className="inputdiv">
                <lable htmlFor="priority">priority:</lable>
                <input id="priority" type="text" onChange={onChangePriority} />
              </div>
              <button type="submit">Add Task</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
