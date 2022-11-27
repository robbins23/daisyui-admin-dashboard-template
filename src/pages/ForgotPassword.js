import {useState, useRef} from 'react'
import CheckCircleIcon  from '@heroicons/react/24/solid/CheckCircleIcon'
import {Link} from 'react-router-dom'

function ForgotPassword(){
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const emailIdRef = useRef()

    const submitForm = (e) =>{
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")

        if(emailIdRef.current.value === ""){
            setErrorMessage("Email Id is required! (use any value)")
            setLoading(false)
        }
        else{
            setLinkSent(true)
            setLoading(false)
        }
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md  shadow-xl">
                <div className="py-12 p-10 bg-base-100 rounded-xl">
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Forgot Password</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        {
                            !linkSent ? (
                                    <div>
                                        <p className='my-4 font-semibold text-center'>We will send password reset link on your email</p>
                                <p className='mb-2 text-error text-center'>{errorMessage}</p>


                                <div className="mb-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base-content">Email Id</span>
                                        </label>
                                        <input type="text" ref={emailIdRef} placeholder="Type here" className="input input-primary input-bordered w-full " />
                                    </div>

                                </div>
                        
                                <button type="submit" className={"btn mt-8 w-full btn-primary" + (loading ? " loading" : "")}>Send Reset Link</button>
                                </div>
                            ) : (
                                <div className='text-center p-8'>
                                    <CheckCircleIcon className="h-16 w-16  inline-block"/>
                                    <p className='my-3 font-semibold text-center'>We have send password reset link on your email Id</p>
                                    <Link to="/login"><button type="submit" className={"btn mt-8 w-full btn-primary"}>Login</button></Link>
                                </div>
                            )
                        }
                        {/* Error Message container if any, after submitting form */}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword