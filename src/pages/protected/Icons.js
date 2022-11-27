import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Icons"}))
      }, [])
      
    return(
        <>
            <article className="prose">

            <p><a href="https://heroicons.com/" target="_blank" className='text-xl btn-link'>HeroIcons</a> library has been used for all the icons in this templates. It has a rich collection of SVG icons, and is made by the makers of Tailwind CSS.</p>

            <p className='mt-4'>Each icon can be imported individually as a React component, check <a href="https://github.com/tailwindlabs/heroicons" target="_blank" className='btn-link'>documentation</a></p>

            <pre><code>{"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"}</code></pre>
            <p>Use as follows in your component</p>
            <pre><code>{"<BeakerIcon className='h-6 w-6'/>"}</code></pre>

            <div className="divider "></div>
            
            <div className="alert mt-4 alert-warning shadow-lg">
                <div><span>Note: Importing all icons in single line will increase your build time</span></div>
            </div>

            <p>Don't import like this</p>
            <pre><code>{"import {BeakerIcon, BellIcon } from '@heroicons/react/24/solid'"}</code></pre>
            
            <p>Instead import as follows</p>
            <pre><code>{"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"}</code></pre>
            <pre><code>{"import BellIcon from '@heroicons/react/24/solid/BellIcon'"}</code></pre>
            
            <div className="badge badge-base">This will not load all icons while building the project</div>
           </article>
        </>
    )
}

export default InternalPage