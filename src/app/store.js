import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import tableSlice from '../features/table/tableSlice'

const combinedReducer = {
  header : headerSlice,
  table : tableSlice
}

export default configureStore({
    reducer: combinedReducer
})