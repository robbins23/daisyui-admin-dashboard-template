import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../../components/Typography/Subtitle'
import { setPageTitle } from '../../common/headerSlice'

function GettingStartedContent(){

    const dispatch = useDispatch()



    return(
        <>
            <article className="prose">
              <h1 className="">Getting Started</h1>


              {/* Introduction */}
              <h2 className="" id="getstarted1">Introduction</h2>
              <p>A free dashboard template using <span className='font-bold'>Daisy UI</span> and react js. With the help of Dasisy UI, it comes with <span className='font-bold'>fully customizable and themable CSS</span> and power of Tailwind CSS utility classes. We have also added <span className='font-bold'>redux toolkit</span>  and configured it for API calls and state management.</p> 
              <p>User authentication has been implemented using JWT token method (ofcourse you need backend API for generating and verifying token). This template can be used to start your next SaaS project or build new internal tools in your company.</p>
              <h4> Core libraries used - </h4>
              <ul>
                  <li><a href="https://reactjs.org/" target="_blank">React JS v18.2.0</a></li>
                  <li><a href="https://reactrouter.com/en/main" target="_blank">React Router v6.4.3</a></li>
                  <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS v3.2.4</a></li>
                  <li><a href="https://daisyui.com/" target="_blank">Daisy UI v2.41.0</a></li>
                  <li><a href="https://heroicons.com/" target="_blank">HeroIcons v2.0.13</a></li>
                  <li><a href="https://redux-toolkit.js.org/" target="_blank">Redux toolkit v1.9.0</a></li>
                  <li><a href="https://react-chartjs-2.js.org/" target="_blank">React ChartJS 2 v5.0.1</a></li>
              </ul>
              <h4>Major features - </h4>
              <p className=''>Almost all major UI components are available in Daisy UI library. Apart from this logic has been added for following - </p>
              <ul>
                  <li> <span className='font-bold'>Light/dark</span> mode toggle</li>
                  <li> Token based user authentication</li>
                  <li> <span className='font-bold'>Submenu support</span> in sidebar</li>
                  <li> Store management using <span className='font-bold'>redux toolkit</span></li>
                  <li> <span className='font-bold'>Daisy UI</span> components</li>
                  <li> <span className='font-bold'>Right and left sidebar</span>, Universal loader, notifications and other components</li>
                  <li> React <span className='font-bold'>chart js 2</span> examples</li>
              </ul>
              




              {/* How to Use */}
              <h2 id="getstarted2">How to use?</h2>
                <p>
                    Just clone the repo from github and then run following command (Make sure you have node js installed )<br/>
                    <a href="https://github.com/srobbin01/daisyui-admin-dashboard-template" className='text-sm text-blue-500' target="_blank">Repo Link</a>
                    <br />
                    <code> npm install </code><br />
                    <code>npm start</code>
                </p>


              {/* Tailwind CSS*/}
              <h2 id="getstarted3">Tailwind CSS</h2>
                <p>
                Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design the UI directly in the JSX. We have also included Daisy UI Component, that is based on tailwind CSS.
                </p>

              {/* Daisy UI */}
              <h2 id="getstarted4">Daisy UI</h2>

              <p><a href="https://daisyui.com/" target="_blank" className='text-xl btn-link'>Daisy UI</a>, a popular free and opensource tailwind component library has been used for this template. It has a rich collection of components, layouts and is fully customizable and themeable.</p>
              
              <p>Apart from this it also helps in making HTML code more cleaner as we don't have to include all utility classes of tailwind to make the UI. Check components <a href="https://daisyui.com/components/button/" target="_blank" className='btn-link'>documentation here</a>. For Ex- </p>

              <div className='text-center'>
                <h2 className='text-xl font-bold mb-0.5'>Creating a button</h2>
              </div>
              <div className="">

                  <div className='text-center'>
                        <p className='text-center font-semibold'> using only utility classes of tailwind</p>
                        <div className="mockup-code text-justify mb-4">
                          <pre className='my-0 py-0'><code>{'<a className="inline-block px-4 py-3 \n text-sm font-semibold text-center \n text-white uppercase transition duration-200 \n ease-in-out bg-indigo-600 \n rounded-md cursor-pointer \n hover:bg-indigo-700">Button</a>'}</code></pre>
                        </div> 
                        <button className="inline-block  px-4 py-3  text-sm font-semibold text-center  text-white uppercase transition duration-200  ease-in-out bg-indigo-600  rounded-md cursor-pointer  hover:bg-indigo-700">Button</button>
                  </div>

                  <div className="divider"></div> 

                  <div className='grid w-full flex-grow'>
                      <p className='text-center font-semibold'>using daisyUI component classes</p>
                        <div className="mockup-code mb-4">
                          <pre className='my-0 py-0'><code>{'<a className="btn btn-primary">\nButton</a>'}</code></pre>
                        </div> 
                        <button className="btn btn-primary">Button</button>
                  </div>
                </div>



                   {/* Chart JS */}
              <h2 id="getstarted5">Chart JS</h2>
                 <p>
                 Chart JS library has rich components of different charts available. It is based on  <a href="https://www.chartjs.org/" target="_blank" alt=""> Chart.js</a> library, the most popular charting library. We have added this library and added couple of examples in seperate page.
                 </p>



                  {/* Redux Toolkit */}
              <h2 id="getstarted6">Redux Toolkit</h2>
                 <p>
                 The Redux Toolkit package helps in writing redux logic easily. It was originally created to help address three common concerns about Redux:
                    <li>Configuring a Redux store is too complicated</li>
                    <li>I have to add a lot of packages to get Redux to do anything useful</li>
                    <li>Redux requires too much boilerplate code"</li>
                    This library has been configured and used for showing notifications, modals and loading data from API in leads page.
                 </p>


                  {/* Hero Icons */}
              <h2 id="getstarted7">Hero Icons</h2>
                <p><a href="https://heroicons.com/" target="_blank" className='text-xl btn-link'>HeroIcons</a> library has been used for all the icons in this templates. It has a rich collection of SVG icons, and is made by the makers of Tailwind CSS.</p>

                <p className='mt-4'>Each icon can be imported individually as a React component, check <a href="https://github.com/tailwindlabs/heroicons" target="_blank" className='btn-link'>documentation</a></p>

                <pre><code>{"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"}</code></pre>
                <p>Use as follows in your component</p>
                <pre><code>{"<BeakerIcon className='h-6 w-6'/>"}</code></pre>

                <div className="divider "></div>

                <div className="alert mt-4 alert-warning shadow-lg">
                    <div><span>Note: Importing all icons in single line will increase your build time</span></div>
                </div>

                <p>Don't import like this (will load all icons and increase build time)</p>
                <pre><code>{"import {BeakerIcon, BellIcon } from '@heroicons/react/24/solid'"}</code></pre>

                <p>Instead import as follows</p>
                <pre><code>{"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"}<br />
                {"import BellIcon from '@heroicons/react/24/solid/BellIcon'"}</code></pre>

                <div className="badge badge-secondary">This is better way for importing icons</div>



                 {/* Project Structure */}
              <h2 id="getstarted8">Project Structure</h2>
              <h4>Folders - </h4>
              <ul className='mt-0'>
                  <li>app - store management, auth and libraries settings are present</li>
                  <li>components - this include all common components to be used in project</li>
                  <li>containers - components related to layout like sidebar, page layout, header etc..</li>
                  <li>features - main folder where all page logic resides, there will be folder for each page and additional folder inside that to group different functionalities like components, modals etc... Redux slice file will also present inside page specific folder.</li>
                  <li>pages - this contain one single file related to one page, if you want to divide page into different components file, use features folder and create seperate folder related to that page</li>
                  <li>routes - all settings related to routes</li>
                </ul>

              <h4>Files - </h4>
              <ul className='mt-0'>
                    <li>App.js - Main file containing different routes and components </li>
                    <li>index.css - Additional global css if required</li>
                    <li>index.js - Entry point of project</li>
                    <li>package.json - All dependencies and npm scripts</li>
                    <li>tailwind.config.js - Tailwind CSS configuration file, add theme customization and new themes in this file</li>
                </ul>


                <div className='h-24'></div>

            </article>
        </>
    )
}

export default GettingStartedContent