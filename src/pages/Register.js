import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'

function Register(){
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const emailIdRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    const submitForm = (e) =>{
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")

        if(emailIdRef.current.value === "" || passwordRef.current.value === "" || nameRef.current.value === ""){
            setErrorMessage("Email Id, password and name is required! (use any value)")
            setLoading(false)
        }
        else{
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/welcome'
        }
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md  shadow-xl">
                <div className="py-12 p-10 bg-base-100 rounded-xl">
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        {/* Error Message container if any, after submitting form */}
                        <p className='mb-2 text-error text-center'>{errorMessage}</p>


                        <div className="mb-4">

                        <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Name</span>
                                </label>
                                <input type="text" ref={nameRef} placeholder="Type here" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Email Id</span>
                                </label>
                                <input type="text" ref={emailIdRef} placeholder="Type here" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Password</span>
                                </label>
                                <input type="password" ref={passwordRef} placeholder="Type here" className="input input-primary input-bordered w-full " />
                            </div>

                        </div>

                        <Link to="/login"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>

                        <button type="submit" className={"btn mt-8 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register