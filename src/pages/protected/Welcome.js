import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import {Link} from 'react-router-dom'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Welcome"}))
      }, [])

    return(
      <div className="hero h-4/5 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
            <article className="prose">
              <h1 className="">DashWind</h1>
              <p className="py-6">Dashboard template built with create-react-app, tailwind css and daisy UI. Template uses rich tailwind css classes and have components of daisy UI, also have redux toolkit implemented for store management.</p>
            </article>
            <Link to="/app/read-me"><button className="btn btn-outline">Get Started</button></Link>
        </div>
      </div>
    </div>
    )
}

export default InternalPage