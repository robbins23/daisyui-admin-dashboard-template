import PageContent from "./PageContent"
import LeftSidebar from "./LeftSidebar"
import { useSelector, useDispatch } from 'react-redux'
import RightSidebar from './RightSidebar'
import { useEffect } from "react"
import  { setRightDrawerIsOpen, removeNotificationMessage } from "../features/common/headerSlice"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ModalLayout from "./ModalLayout"
import { closeRightDrawer } from "../features/common/rightDrawerSlice"
import { closeModal } from "../features/common/modalSlice"

function Layout(){
  const dispatch = useDispatch()
  const {newNotificationMessage, newNotificationStatus} = useSelector(state => state.header)
  const {rightDrawerIsOpen, rightDrawerBodyType, rightDrawerTitle, rightDrawerExtraObj} = useSelector(state => state.rightDrawer)
  const {modalIsOpen, modalBodyType, modalSize, modalExtraObj} = useSelector(state => state.modal)


  useEffect(() => {
      if(newNotificationMessage !== ""){
          if(newNotificationStatus === 1)NotificationManager.success(newNotificationMessage, 'Success')
          if(newNotificationStatus === 0)NotificationManager.error( newNotificationMessage, 'Error')
          dispatch(removeNotificationMessage())
      }
  }, [newNotificationMessage])

    return(
      <>
        { /* Left drawer - containing page content and side bar (always open) */ }
        <div className="drawer drawer-mobile">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <PageContent/>
            <LeftSidebar />
        </div>

        { /* Right drawer - containing secondary content like notifications list etc.. */ }
        <RightSidebar header={rightDrawerTitle} closeRightDrawer={() => dispatch(closeRightDrawer())} isOpen={rightDrawerIsOpen} bodyType={rightDrawerBodyType} extraObject={rightDrawerExtraObj}/>


        {/** Notification layout container */}
        <NotificationContainer />

        <ModalLayout isOpen={modalIsOpen} closeModal={() => dispatch(closeModal())} modalBodyType={modalBodyType} size={modalSize}  extraObject={modalExtraObj}/>

      </>
    )
}

export default Layout