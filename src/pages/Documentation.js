import {Link} from 'react-router-dom'
import ReadMe from './protected/ReadMe'

function Documentation(){
    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-4xl  shadow-xl">
                <div className="py-12 p-10 bg-base-100 rounded-xl">
                    <ReadMe />
                    <Link to="/login"><button type="submit" className={"btn mt-8 w-full btn-primary"}>Live Preview</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Documentation