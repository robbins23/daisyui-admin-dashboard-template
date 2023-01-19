function Title({className, children}){
    return(
        <p className={`text-2xl font-bold  ${className}`}>{children}</p>
    )
}

export default Title