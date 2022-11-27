import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle, showNotification } from '../../features/common/headerSlice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Notification"}))
      }, [])

      
    return(
        <article className="prose">
              <p>Many times we have to show notification to user be it on successfull form submission or any api success. And requirement can come to show notification from any page, so global notification handling is needed.</p>

              <p className='mt-4'>Code for showing notification is present in headerSlice and layout container component. To show notification just call <span className='badge badge-base'>showNotification()</span> function of headerSlice.</p> 
              
              <p>Click on this button to check</p>

              <button className='btn btn-success' onClick={() => dispatch(showNotification({message : "Your message has been sent!", status : 1}))}>Success</button>

              <button className='btn btn-error ml-4' onClick={() => dispatch(showNotification({message : "Something went wrong!", status : 0}))}>Error</button>
        </article> 
    )
}

export default InternalPage