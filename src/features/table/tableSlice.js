import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTableContent = createAsyncThunk('/passengers', async () => {
	const response = await axios.get('/passenger?page=0&size=300', {})
	return response.data;
})

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        isLoading: false,
        tableRows : []
    },
    reducers: {
        
    },

    extraReducers: {
		[getTableContent.pending]: state => {
			state.isLoading = true
		},
		[getTableContent.fulfilled]: (state, action) => {
			state.tableRows = action.payload.data
			state.isLoading = false
		},
		[getTableContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const {  } = tableSlice.actions

export default tableSlice.reducer