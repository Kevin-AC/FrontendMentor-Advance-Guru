export default function BalanceCard({ title, balance, bgColor = "bg-grey-900", titleColor = "text-white", balanceColor ="text-white"}){
    return(
        <div className={`w-full lg:max-w-84.5  rounded-xl p-250 ${bgColor}`}>
            <h2 className={`preset-4 ${titleColor}`}>{title}</h2>
            <p className={`preset-1 ${balanceColor}`}>{balance}</p>
        </div>
    )
}