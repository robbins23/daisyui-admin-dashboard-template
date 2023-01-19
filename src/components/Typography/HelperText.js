function HelperText({className, children}){
    return(
        <p className={`text-base-300 ${className}`}>{children}</p>
    )
}

export default HelperText