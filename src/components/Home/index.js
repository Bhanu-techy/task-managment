import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/listSlice'
import Card from '../Card'
import TaskForm from '../TaskForm'
import './index.css'

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.list.data)

  const [priority, setPriority] = useState('')
  const [dueDate, setDuedate] = useState('')
  const today = new Date().toISOString().split('T')[0]

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

  return (
    <div className="home-bg">
      <nav>
        <h1>Task Managment Project</h1>
      </nav>
      <hr className="nav-line" />
      <div className="home-container">
        <div className="container">
          <h1 className="">Dashboard</h1>
          <div className="filter-cont">
            <select onChange={onChangeFilter}>
              <option disapled selected hidden>
                filter
              </option>
              <option value="HIGH">high</option>
              <option value="LOW">low</option>
              <option value="MEDIUM">medium</option>
            </select>
            <select onChange={onChangeDate}>
              <option disapled selected hidden>
                Day wise
              </option>
              <option value="UPCOMING">upcoming</option>
              <option value="OVERDUE">over due</option>
            </select>
          </div>
        </div>
        <div className="card-container">
          {pendingList.length > 0 && (
            <div className="card">
              <p>
                To Do <span>{pendingList.length}</span>
              </p>
              <hr className="to-do-hr" />
              <ul>
                {pendingList.map(each => (
                  <Card data={each} key={each.id} />
                ))}
              </ul>
              <TaskForm status={pendingList[0].status} />
            </div>
          )}
          {inprogressList.length > 0 && (
            <div className="card">
              <p>
                On Progress <span>{inprogressList.length}</span>
              </p>
              <hr className="onprogress-hr" />
              <ul>
                {inprogressList.map(each => (
                  <Card data={each} key={each.id} />
                ))}
              </ul>
              <TaskForm status={inprogressList[0].status} />
            </div>
          )}
          {completedList.length > 0 && (
            <div className="card">
              <p>
                Done <span>{completedList.length}</span>
              </p>
              <hr className="done-hr" />
              <ul>
                {completedList.map(each => (
                  <Card data={each} key={each.id} />
                ))}
              </ul>
              <TaskForm status={completedList[0].status} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
