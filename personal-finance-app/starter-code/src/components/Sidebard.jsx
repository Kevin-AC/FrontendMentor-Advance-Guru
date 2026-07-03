import { useState } from "react"

export default function Sidebard(){
    const [isMinimized, setIsMinimized]= useState(false)
    return(
        <aside className={`h-full rounded-r-2xl bg-grey-900 flex flex-col justify-between transition-all duration-300 ${isMinimized ? "w-28" : "w-75"}`}>
            <div className="">
                <div className="px-500 py-400">
                    {isMinimized ? (
                        <img className="w-6" src="/images/logo-small.svg" alt="logo-small" />
                    ) : (
                        <img src="/images/logo-large.svg" alt="finance-logo" />
                    )}
                </div>
                <nav className="pr-300 ">
                    <ul>
                        <li className="px-400 py-200 rounded-r-xl border-l-4 border-green  bg-beige-100 ">
                            <a href="#dashboard" className="flex gap-200 text-grey-900 preset-3 items-center">
                                <img  src="/images/icon-nav-overview.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span>Overview</span>}
                            </a>
                        </li>
                        <li className="px-400 py-200 rounded-r-xl ">
                            <a href="#Transactions" className="flex gap-200 text-grey-300 preset-3 items-center">
                                <img src="/images/icon-nav-transactions.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span>Transactions</span>}
                            </a>
                        </li>
                        <li className="px-400 py-200 rounded-r-xl ">
                            <a href="#Budgets" className="flex gap-200 text-grey-300 preset-3 items-center">
                                <img src="/images/icon-nav-budgets.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span>Budgets</span>}
                            </a>
                        </li>
                        <li className="px-400 py-200 rounded-r-xl ">
                            <a href="#Pots" className="flex gap-200 text-grey-300 preset-3 items-center">
                                <img src="/images/icon-nav-pots.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span>Pots</span>}
                            </a>
                        </li>
                        <li className="px-400 py-200 rounded-r-xl ">
                            <a href="#Recurring-Bills" className="flex gap-200 text-grey-300 preset-3 items-center">
                                <img src="/images/icon-nav-recurring-bills.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span>Recurring Bills</span>}
                            </a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
            <button className="flex items-center gap-200 px-400 py-300 mb-400 w-full text-left cursor-pointer"
                onClick={() => setIsMinimized(!isMinimized)}
            >
                <img className={`transition-transform duration-300 ${isMinimized ? "rotate-180 mx-auto" : ""}`} src="/images/icon-minimize-menu.svg" alt="icon-minimize-menu" />
                {!isMinimized && <p className="text-grey-300 preset-3 group-hover:text-white transition-colors">Minimize Menu</p>}
            </button>
        </aside>
    )
}