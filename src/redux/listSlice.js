import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(
    'https://task-managment-production-3b91.up.railway.app/api/todos',
  )
  return response.json()
})

export const createTask = createAsyncThunk('user/fectchUser', async newTask => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newTask),
  }
  const response = await fetch(
    'https://task-managment-production-3b91.up.railway.app/api/todos',
    options,
  )
  return response.json()
})

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    data: [],
  },
  reducers: {},

  extraReducers: builder => {
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const {addTask} = listSlice.actions

export default listSlice.reducer
