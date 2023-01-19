import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Subtitle from '../../../components/Typography/Subtitle'
import { setPageTitle, showNotification } from '../../common/headerSlice'

function DocComponentsContent(){

    const dispatch = useDispatch()

    return(
        <>
            <article className="prose">
              <h1 className="" >Components</h1>



                {/* Typography*/}
              <h2 id="component1">Typography</h2>
                <p>
                    
                </p>


                 {/* Form Input*/}
              <h2 id="component2">Form Input</h2>
                <p>
                    
                </p>



                 {/* Cards */}
                 <h2 id="component3">Cards</h2>
                <p>
                    
                </p>


                 

                    <div className='h-24'></div>


            </article>
        </>
    )
}

export default DocComponentsContent