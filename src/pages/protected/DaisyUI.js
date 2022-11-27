import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Daisy UI"}))
      }, [])

    return(
        <>
        <article className="prose">
              <p><a href="https://daisyui.com/" target="_blank" className='text-xl btn-link'>Daisy UI</a>, a popular free and opensource tailwind component library has been used for this template. It has a rich collection of components, layouts and is fully customizable and themeable. </p>
              
              <p>Apart from this it also helps in making HTML code more cleaner as we don't have to include all utility classes of tailwind to make the UI. Check components <a href="https://daisyui.com/components/button/" target="_blank" className='btn-link'>documentation</a></p>

              <div className='text-center'>
                <h2 className='text-xl font-bold mb-0.5'>Creating a button</h2>
              </div>
              <div className="flex flex-col w-full lg:flex-row">
                  <div className='flex-grow'>
                        <p className='text-center font-semibold'> using only utility classes</p>
                        <div className="mockup-code mb-4">
                          <pre className='my-0 py-0'><code>{'<a className="inline-block px-4 py-3 \n text-sm font-semibold text-center \n text-white uppercase transition duration-200 \n ease-in-out bg-indigo-600 \n rounded-md cursor-pointer \n hover:bg-indigo-700">Button</a>'}</code></pre>
                        </div> 
                        <button className="inline-block px-4 py-3  text-sm font-semibold text-center  text-white uppercase transition duration-200  ease-in-out bg-indigo-600  rounded-md cursor-pointer  hover:bg-indigo-700">Button</button>
                  </div>
                  <div className="divider lg:divider-horizontal">OR</div> 
                  <div className='grid w-full flex-grow'>
                      <p className='text-center font-semibold'>using daisyUI component classes</p>
                        <div className="mockup-code mb-4">
                          <pre className='my-0 py-0'><code>{'<a className="btn btn-primary">\nButton</a>'}</code></pre>
                        </div> 
                        <button className="btn btn-primary">Button</button>
                  </div>
              </div>



              </article>

        </>
    )
}

export default InternalPage