export default function ButtonTertiary({name}){
    return(
        <button className="w-26 h-5 flex items-center gap-150  text-grey-500 hover:text-grey-900">
            {name}
            <img src="/images/icon-caret-right.svg" alt="icon-caret-right" />
        </button>   
    )
}