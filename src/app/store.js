import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import tableSlice from '../features/table/tableSlice'

const combinedReducer = {
  header : headerSlice,
  table : tableSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice
}

export default configureStore({
    reducer: combinedReducer
})