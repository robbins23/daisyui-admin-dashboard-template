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
                   JWT based Authentication logic is present in <span className="badge mt-0 mb-0 badge-ghost">/app/auth.js</span>. In the file you can see we are adding bearer token in header for every request. Every routes under <span className="badge mt-0 mb-0 badge-ghost">/routes/</span> folder will need authentication. For public routes like login, register you will have to add routes in <span className="badge mt-0 mb-0 badge-ghost">App.js</span> file and also include the path in PUBLIC_ROUTES variable under <span className="badge mt-0 mb-0 badge-ghost">/app/auth.js</span> file so that auto redirect to login page is not triggered.
                   
                </p>




                   {/* Left Sidebar*/}
              <h2 id="feature2">Left Sidebar</h2>
                  <p>
                      This is main internal navigation (for pages that will come after login only), all sidebar menu items with their icons are present in <span className="badge mt-0 mb-0 badge-ghost">/routes/sidebar.js</span>  file, while  path and page components mapping are respectively present in <span className="badge mt-0 mb-0 badge-ghost">/routes/index.js</span> file.
                    </p>



                {/* Add New Page*/}
            <h2 id="feature3">Add New Page</h2>
                <p>All <span className='font-semibold'>public routes</span> are present in <span className="badge mt-0 mb-0 badge-ghost">App.js</span> file. Steps to add new public page - 
                </p>

                <ul className='mt-0'>
                        <li>Create Page inside <span className="badge mt-0 mb-0 badge-ghost">/pages</span> folder</li>
                        <li>Go to <span className="badge mt-0 mb-0 badge-ghost">App.js</span> and import the component and add its path</li>
                        <li>Add your new route path in <span className="badge mt-0 mb-0 badge-ghost">/app/auth.js</span> file under PUBLIC_ROUTES variable, this will allow the page to open without login.</li>
                </ul>

                <p className='mt-4'>All <span className='font-semibold'>protected routes</span> are present in <span className="badge mt-0 mb-0 badge-ghost">/routes/sidebar.js</span> file</p>

                <ul className='mt-0'>
                        <li>Create your page inside <span className="badge mt-0 mb-0 badge-ghost">/pages/protected</span> folder</li>
                        <li>Add your new routes in <span className="badge mt-0 mb-0 badge-ghost">/routes/sidebar.js</span>, this will show your new page in sidebar</li>
                        <li>Import your new routes component and map its path in <span className="badge mt-0 mb-0 badge-ghost">/routes/index.js</span></li>
                 </ul>



              {/* Right Sidebar*/}
              <h2 id="feature4">Right Sidebar</h2>
                    <div>
                        This is used for showing long list contents like notifications, settings etc.. We are using redux to show and hide and it is single component and can be called from any file with dispatch method.
                        To add new content follow following steps:
                        <ul>
                          <li>Create new component file containing main body of your content</li>
                          <li>Create new variable in <span className="badge mt-0 mb-0 badge-ghost">/utils/globalConstantUtils.js</span> file under RIGHT_DRAWER_TYPES variable</li>
                          <li>Now include the file mapped with the new variable in <span className="badge mt-0 mb-0 badge-ghost">/containers/RightSidebar.js</span> file using switch. <br />
                           For ex- If you new component name is <span className="badge mt-0 mb-0 badge-ghost">TestRightSideBar.js</span> and  variable name is TEST_RIGHT_SIDEBAR, then add following code inside switch code block
                          <br />
                          <div className="mockup-code mt-4">
                                <pre className='my-0 py-0'><code>{`[RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR] : \n<TestRightSideBar {...extraObject} closeRightDrawer={close}/>`}</code></pre>
                          </div>
                          <span className='text-sm mt-1 italic'>Here extraObject have variables that is passed from parent component while calling openRightDrawer method</span>
                          </li>
                          <li>Now the last step, call dispatch method as follows
                          <div className="mockup-code mt-1">
                                <pre className='my-0 py-0'><code>{'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(openRightDrawer({header : "Test Right Drawer", \n  bodyType : RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR}))'}</code></pre>
                          </div> 
                          </li>
                        </ul>
                    </div>


                    {/* Themes*/}
              <h2 id="feature5">Themes</h2>
                <p>
                By default we have added light and dark theme and Daisy UI comes with a number of themes, which you can use with no extra effort, you just have to include it in <span className="badge mt-0 mb-0 badge-ghost">tailwind.config.js</span> file,  you can add themes like cupcake, corporate, reto etc... Also we can configure themes colors in config file, for more documentation on themes checkout <a href="https://daisyui.com/docs/themes/" target="_blank">Daisy UI documentation.</a>
                </p>




                    {/* Modal*/}
              <h2 id="feature6">Modal</h2>
                  <div>
                        With global modal functionality you dont have to create seperate modal for each page. We are using redux to show and hide and it is a single component and can be called from any file with dispatch method.
                        Code for showing modal is present in modalSlice and layout container component. To show modal just call openModal() function of modalSlice using dispatch.
                        <br />
                        To add new modal in any page follow following steps:
                        <ul>
                          <li>Create new component file containing main body of your modal content</li>
                          <li>Create new variable in <span className="badge mt-0 mb-0 badge-ghost">/utils/globalConstantUtils.js</span> file under MODAL_BODY_TYPES variable</li>
                          <li>Now include the file mapped with the new variable in <span className="badge mt-0 mb-0 badge-ghost">/containers/ModalLayout.js</span> file using switch. <br />
                           For ex- If you new component name is <span className="badge mt-0 mb-0 badge-ghost">TestModal.js</span> and  variable name is TEST_MODAL, then add following code inside switch code block
                          <br />
                          <div className="mockup-code mt-4">
                                <pre className='my-0 py-0'><code>{`[RIGHT_DRAWER_TYPES.TEST_MODAL] : \n<TestModal closeModal={close} extraObject={extraObject}/>`}</code></pre>
                          </div>
                          <span className='text-sm mt-1 italic'>Here extraObject have variables that is passed from parent component while calling openModal method</span>
                          </li>
                          <li>Now the last step, call dispatch method as follows
                          <div className="mockup-code mt-1">
                                <pre className='my-0 py-0'><code>{'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n   dispatch(openModal({title : "Test Modal Title", \n   bodyType : MODAL_BODY_TYPES.TEST_MODAL}))'}</code></pre>
                          </div> 
                          </li>
                        </ul>
                    </div>




                 


                  {/* Notification*/}
                  <h2 id="feature7">Notification</h2>
                  <p>Many times we have to show notification to user be it on successfull form submission or any api success. And requirement can come to show notification from any page, so global notification handling is needed.</p>

                    <p className='mt-4'>Code for showing notification is present in headerSlice and layout container component. To show notification just call <span className='badge badge-ghost'>showNotification()</span> function of headerSlice using dispatch. To show success message notification pass status as 1 and for showing error message pass status as 0.</p> 

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