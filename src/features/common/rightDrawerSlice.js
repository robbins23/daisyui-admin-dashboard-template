import { createSlice } from '@reduxjs/toolkit'

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState: {
        rightDrawerTitle: "",  // current  title state management
        rightDrawerIsOpen : false,   // right drawer state management for opening closing
        rightDrawerBodyType : "",   // right drawer content management
        rightDrawerExtraObj : {},   
    },
    reducers: {

        openRightDrawer: (state, action) => {
            const {title, bodyType, extraObject} = action.payload
            state.rightDrawerIsOpen = true
            state.rightDrawerBodyType = bodyType
            state.rightDrawerTitle = title
            state.rightDrawerExtraObj = extraObject
        },

        closeRightDrawer: (state, action) => {
            state.rightDrawerIsOpen = false
            state.rightDrawerBodyType = ""
            state.rightDrawerTitle = ""
            state.rightDrawerExtraObj = {}
        },

    }
})

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions

export default rightDrawerSlice.reducer