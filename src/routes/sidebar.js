/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import Square2StackIcon from '@heroicons/react/24/outline/Square2StackIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'


const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/read-me', // url
    icon: <DocumentTextIcon className={iconClasses}/>, // icon component
    name: 'Read Me', // name that appear in Sidebar
  },
  {
    path: '/app/daisyui',
    icon: <CodeBracketSquareIcon className={iconClasses}/>, 
    name: 'Daisy UI',
  },
  {
    path: '/app/icons',
    icon: <ShieldCheckIcon className={iconClasses}/>, 
    name: 'Icons',
  },
  {
    path: '/app/table',
    icon: <TableCellsIcon className={iconClasses}/>, 
    name: 'Table',
  },
  {
    path: '/app/notifications',
    icon: <BellIcon className={iconClasses}/>, 
    name: 'Notifications',
  },
  {
    path: '', //no url needed as this has submenu
    icon: <Square2StackIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/register', //url
        icon: <UserCircleIcon className={submenuIconClasses}/>, // icon component
        name: 'Register', // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Forgot Password',
      },
      {
        path: '/app/blank',
        icon: <DocumentIcon className={submenuIconClasses}/>,
        name: 'Blank Page',
      },
      {
        path: '/app/404',
        icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
        name: '404',
      },
    ]
  },
  
]

export default routes
