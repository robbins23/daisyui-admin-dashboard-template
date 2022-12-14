import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalTitle: "",  // current  title state management
        modalIsOpen : false,   // modal state management for opening closing
        modalBodyType : "",   // modal content management
        modalSize : "",   // modal content management
        modalExtraObj : {},   
    },
    reducers: {

        openModal: (state, action) => {
            const {title, bodyType, extraObject, size} = action.payload
            state.modalIsOpen = true
            state.modalBodyType = bodyType
            state.modalTitle = title
            state.modalSize = size || 'md'
            state.modalExtraObj = extraObject
        },

        closeModal: (state, action) => {
            state.modalIsOpen = false
            state.modalBodyType = ""
            state.modalTitle = ""
            state.modalExtraObj = {}
        },

    }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer