// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const DaisyUI = lazy(() => import('../pages/protected/DaisyUI'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Table = lazy(() => import('../pages/protected/Table'))
const ReadMe = lazy(() => import('../pages/protected/ReadMe'))
const Icons = lazy(() => import('../pages/protected/Icons'))
const Notification = lazy(() => import('../pages/protected/Notification'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/daisyui',
    component: DaisyUI,
  },
  {
    path: '/icons',
    component: Icons,
  },
  {
    path: '/notifications',
    component: Notification,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/table',
    component: Table,
  },
  {
    path: '/read-me',
    component: ReadMe,
  },
  
]

export default routes
