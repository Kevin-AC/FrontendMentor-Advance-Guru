export default function RecurringCard({className,title,balance}){
    return(
        <div className={`px-4 py-5 bg-beige-100 border-l-4 rounded-lg ${className}`}>
            <div className="flex gap-200 ">
                <article className="flex w-full justify-between">
                    <p className="preset-4 text-grey-500">{title}</p>
                    <p className="preset-4-bold text-grey-900">{balance}</p>
                </article>
            </div>
        </div>
    )
}