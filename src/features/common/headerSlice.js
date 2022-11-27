import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: "Home",  // current page title state management
        noOfNotifications : 15,  // no of unread notifications
        rightDrawerIsOpen : false,   // right drawer state management for opening closing
        newNotificationMessage : "",  // message of notification to be shown
        newNotificationStatus : 1,   // to check the notification type -  success/ error/ info
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload.title
        },

        setRightDrawerIsOpen: (state, action) => {
            state.rightDrawerIsOpen = action.payload
        },

        removeNotificationMessage: (state, action) => {
            state.newNotificationMessage = ""
        },

        showNotification: (state, action) => {
            console.log(action)
            state.newNotificationMessage = action.payload.message
            state.newNotificationStatus = action.payload.status
        },
    }
})

export const { setPageTitle, removeNotificationMessage, showNotification, setRightDrawerIsOpen } = headerSlice.actions

export default headerSlice.reducer