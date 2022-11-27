export default function Subtitle({text, styleClass, children}){
    return(
        <p className={`text-xl font-semibold mb-0 mt-4 ${styleClass}`}>{children}</p>
    )
}