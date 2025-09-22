import './index.css'

const Card = props => {
  const {data} = props
  const {title, description, priority} = data

  return (
    <li className="todo-box">
      <p className="priority">{priority}</p>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default Card
