const Input = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">title:</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <input htmlFor="description" type="text" />
      </div>
      <div>
        <lable htmlFor="priority">priority:</lable>
        <input id="priority" type="text" />
      </div>
    </form>
  )
}

export default Input
