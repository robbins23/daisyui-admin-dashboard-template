export default function Title({text, styleClass}){
    return(
        <h1 className={`text-2xl font-bold ${styleClass}`}>{text}</h1>
    )
}