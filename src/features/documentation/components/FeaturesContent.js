import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../../components/Typography/Subtitle'
import { setPageTitle, showNotification } from '../../common/headerSlice'

function FeaturesContent(){

    const dispatch = useDispatch()

    return(
        <>
            <article className="prose">
              <h1 className="">Features</h1>



                {/* Authentication*/}
              <h2 id="feature1">Authentication</h2>
                <p>
                   
                </p>




                   {/* Left Sidebar*/}
              <h2 id="feature2">Left Sidebar</h2>
                <p>
                   
                </p>



                {/* Add New Page*/}
            <h2 id="feature3">Add New Page</h2>
                <p>All <span className='font-semibold'>public routes</span> are present in <span className="badge mt-0 mb-0 badge-neutral">App.js</span> file. Steps to add new public page - 
                </p>

                <ul className='mt-0'>
                        <li>Create Page inside <span className="badge mt-0 mb-0 badge-neutral">/pages</span> folder</li>
                        <li>Go to <span className="badge mt-0 mb-0 badge-neutral">App.js</span> and import the component and add its path</li>
                        <li>Add your new route path in <span className="badge mt-0 mb-0 badge-neutral">/app/auth.js</span> file under PUBLIC_ROUTES variable.</li>
                </ul>

                <p className='mt-4'>All <span className='font-semibold'>protected routes</span> are present in <span className="badge mt-0 mb-0 badge-neutral">/routes/sidebar.js</span> file</p>

                <ul className='mt-0'>
                        <li>Create your page inside <span className="badge mt-0 mb-0 badge-neutral">/pages/protected</span> folder</li>
                        <li>Add your new routes in <span className="badge mt-0 mb-0 badge-neutral">/routes/sidebar.js</span>, this will show your new page in sidebar</li>
                        <li>Import your new routes component and map its path in <span className="badge mt-0 mb-0 badge-neutral">/routes/index.js</span></li>
                 </ul>



              {/* Right Sidebar*/}
              <h2 id="feature4">Right Sidebar</h2>
                    <p>
                      
                    </p>


                    {/* Themes*/}
              <h2 id="feature5">Themes</h2>
                <p>
                   
                </p>




                    {/* Modal*/}
              <h2 id="feature6">Modal</h2>
                <p>
                   
                </p>




                 


                  {/* Notification*/}
                  <h2 id="feature7">Notification</h2>
                  <p>Many times we have to show notification to user be it on successfull form submission or any api success. And requirement can come to show notification from any page, so global notification handling is needed.</p>

                    <p className='mt-4'>Code for showing notification is present in headerSlice and layout container component. To show notification just call <span className='badge badge-base'>showNotification()</span> function of headerSlice using dispatch. For success notification pass status as 1 and for error as 0 respectively.</p> 

                    <div className="mockup-code mb-4">
                          <pre className='my-0 py-0'><code>{'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(showNotification({message : "Message here", status : 1}))'}</code></pre>
                    </div> 

                    <p>Click on this button to check</p>

                    <button className='btn btn-success' onClick={() => dispatch(showNotification({message : "Your message has been sent!", status : 1}))}>Success</button>

                    <button className='btn btn-error ml-4' onClick={() => dispatch(showNotification({message : "Something went wrong!", status : 0}))}>Error</button>


                    <div className='h-24'></div>


            </article>
        </>
    )
}

export default FeaturesContent