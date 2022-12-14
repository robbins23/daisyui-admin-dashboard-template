export default function ErrorText({message, styleClass}){
    return(
        <p className={`text-center font-semibold text-error mt-8 ${styleClass}`}>{message}</p>
    )
}