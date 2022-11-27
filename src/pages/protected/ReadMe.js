import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../components/Typography/Subtitle'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Read Me"}))
      }, [])

    return(
        <>
            <article className="prose">
              <h1 className="">DashWind</h1>

              <p>Dashwind is a free template for dashboard project using tailwind CSS and react js. With the help of Dasisy UI, it comes with fully customizable and themable CSS. It also comes with redux toolkit configured. </p> 
              
              <p>Also login logout flow has been already implemented, you can use this template to start your next SaaS project or build new internal tools in your company.</p>
              <Subtitle> Main libraries used - </Subtitle>
              <ul>
                <li><a href="https://reactjs.org/" target="_blank">React JS v18.2.0</a></li>
                <li><a href="https://reactrouter.com/en/main" target="_blank">React Router v6.4.3</a></li>
                <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS v3.2.4</a></li>
                <li><a href="https://daisyui.com/" target="_blank">Daisy UI v2.41.0</a></li>
                <li><a href="https://heroicons.com/" target="_blank">HeroIcons v2.0.13</a></li>
                <li><a href="https://redux-toolkit.js.org/" target="_blank">Redux toolkit v1.9.0</a></li>
                <li><a href="https://react-chartjs-2.js.org/" target="_blank">React ChartJS 2 v5.0.1</a></li>
                
              </ul>

              <p className='mt-4'>This project was bootstrapped with <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">Create React App</a>.</p>

              <Subtitle>Major functionality - </Subtitle>
              <p className=''>Almost all major UI components are available in Daisy UI library. Apart from this logic has been added for following - </p>
              <ul>
                <li>Token based user authentication </li> 
                <li>Store management using redux toolkit</li> 
                <li>Light/dark mode toggle</li> 
                <li>Submenu support in sidebar</li>
                <li>Daisy UI components</li>
                <li>Universal loader for API calls</li>
                <li>Right sidebar for other content</li>
                <li>New notification messages and other pages</li>
                <li>React chart js 2 examples</li>
              </ul>
              <Subtitle>How to use?</Subtitle>
                <p>
                    Just clone the repo from github and then run following command <br/>
                    <code> npm install </code><br />
                    <code>npm start</code>
                </p>

              <Subtitle>Project Routes</Subtitle>
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

              <Subtitle>Project Structure</Subtitle>
              <p>Folders - </p>
              <ul className='mt-0'>
                  <li>app - store management, auth and libraries settings are present</li>
                  <li>components - this include all common components to be used in project</li>
                  <li>containers - components related to layout like sidebar, page layout, header etc..</li>
                  <li>features - main folder where all page logic resides, there will be folder for each page and additional folder inside that to group different functionalities like components, modals etc... Redux slice file will also present inside page specific folder.</li>
                  <li>pages - this contain one single file related to one page, if you want to divide page into different components file, use features folder and create seperate folder related to that page</li>
                  <li>routes - all settings related to routes</li>
                </ul>

              <p>Files - </p>
              <ul className='mt-0'>
                    <li>App.js - Main file containing different routes and components </li>
                    <li>index.css - Additional global css if required</li>
                    <li>index.js - Entry point of project</li>
                    <li>package.json - All dependencies and npm scripts</li>
                    <li>tailwind.config.js - Tailwind CSS configuration file, add theme customization and new themes in this file</li>
                </ul>

            </article>
        </>
    )
}

export default InternalPage