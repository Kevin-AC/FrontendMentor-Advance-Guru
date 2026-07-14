export default function ImputText(){
    return(
        <div className="w-full relative sm:w-42 ">
            <input type="text" 
                placeholder="Search transaction"
                className="w-full border border-beige-500 preset-4 rounded-lg px-250 py-150 placeholder:text-beige-500 focus:outline-none focus:border-grey-900 focus:ring-1 focus:ring-grey-900" />
            <div className="absolute inset-y-0 right-0 flex items-center pr-400 pointer-events-none">
                <img
                    src="/images/icon-search.svg"
                    alt=""
                    className="w-5 h-5"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}