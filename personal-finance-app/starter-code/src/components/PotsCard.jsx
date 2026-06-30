export default function PotsCard({title,balance,color}){
    return(
        <div className="">
            <div className="flex gap-200">
                <div className={`w-1 h-auto rounded-full ${color}`}/>
               <aside>
                    <p className="preset-5 text-grey-500">{title}</p>
                    <p className="preset-4-bold text-grey-900">{balance}</p>
               </aside>
            </div>
        </div>
    )
}