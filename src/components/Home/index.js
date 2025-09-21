import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/listSlice'
import Card from '../Card'
import './index.css'

const Home = () => {
  const dispatch = useDispatch()
  let todos = useSelector(state => state.list.data)
  
  const [filterData, setfilterData] = useState("")
  const [todosList, setTodosList] = useState()

  const onChangeFilter = (event) => {
    setfilterData(event.target.value)
    
    
  }
  const filteredList = todos.filter(each => each.priority === filterData.toLowerCase())
  const filteredData = filterData ==="" ? todos : filteredList
  console.log(filteredList)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const pendingList = filteredData.filter(each => each.status === 'pending')
  const completedList = filteredData.filter(each => each.status === 'completed')
  const inprogressList = filteredData.filter(each => each.status === 'in-progress')

  return (
    <div className="home-container">
      <div className="container">
        <h1>Dashboard</h1>
        <select onChange={onChangeFilter}>
          <option value="HIGH">high</option>
          <option value="LOW">low</option>
          <option value="MEDIUM">medium</option>
        </select>
        <select>
          <option value="UPCOMMING">upcoming</option>
          <option value="OVERDUE">over due</option>
        </select>
      </div>
      <div className="card-container">
        <div className="card">
          <p>To Do</p>

          <ul>
            {pendingList.map(each => (
              <Card data={each} key={each.id} />
            ))}
          </ul>
        </div>
        <div className="card">
          <p>on Progress</p>

          <ul>
            {completedList.map(each => (
              <Card data={each} key={each.id} />
            ))}
          </ul>
        </div>
        <div className="card">
          <p>Completed</p>
          <ul>
            {inprogressList.map(each => (
              <Card data={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
