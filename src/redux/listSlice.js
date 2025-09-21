import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(
    'https://task-managment-production-3b91.up.railway.app/api/todos',
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
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export default listSlice.reducer
