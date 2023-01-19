 function Subtitle({styleClass, children}){
    return(
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle