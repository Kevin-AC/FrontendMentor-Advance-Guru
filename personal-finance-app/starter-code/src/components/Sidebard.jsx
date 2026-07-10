import { useState } from "react"

export default function Sidebard(){
    const [isMinimized, setIsMinimized]= useState(false)
    return(
        <aside className={`p-0 bottom-0 absolute lg:relative z-50  w-full  rounded-t-2xl  lg:h-full lg:rounded-t-none  lg:rounded-r-2xl bg-grey-900 flex flex-col justify-between transition-all duration-300 ${isMinimized ? "lg:w-28" : "lg:w-75"}`}>
            <div className="h-full">
                <div className="hidden lg:block px-500 py-400">
                    {isMinimized ? (
                        <img className="w-6" src="/images/logo-small.svg" alt="logo-small" />
                    ) : (
                        <img src="/images/logo-large.svg" alt="finance-logo" />
                    )}
                </div>
                <nav className="px-200 pt-150 lg:pr-300 lg:px-0 h-1/2">
                    <ul className="flex justify-between items-center  lg:items-start lg:flex-col h-full ">
                        <li className="pt-100 lg:px-400 selecctedNav">
                            <a href="#dashboard" className="flex sm:flex-col lg:flex-row gap-200 text-grey-900 preset-3 items-center">
                                <img className="w-[24px] h-[24px]"  src="/images/icon-nav-overview.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span className="hidden sm:block">Overview</span>}
                            </a>
                        </li>
                        <li className="pt-100 lg:px-400 ">
                            <a href="#Transactions" className="flex sm:flex-col lg:flex-row gap-200 text-grey-300 preset-3 items-center">
                                <img className="w-[24px] h-[24px]" src="/images/icon-nav-transactions.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span className="hidden sm:block">Transactions</span>}
                            </a>
                        </li>
                        <li className="pt-100 lg:px-400 ">
                            <a href="#Budgets" className="flex sm:flex-col lg:flex-row gap-200 text-grey-300 preset-3 items-center">
                                <img className="w-[24px] h-[24px]" src="/images/icon-nav-budgets.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span className="hidden sm:block">Budgets</span>}
                            </a>
                        </li>
                        <li className="pt-100 lg:px-400 ">
                            <a href="#Pots" className="flex sm:flex-col lg:flex-row gap-200 text-grey-300 preset-3 items-center">
                                <img className="w-[24px] h-[24px]" src="/images/icon-nav-pots.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span className="hidden sm:block">Pots</span>}
                            </a>
                        </li>
                        <li className="pt-100 lg:px-400 ">
                            <a href="#Recurring-Bills" className="flex sm:flex-col lg:flex-row gap-200 text-grey-300 preset-3 items-center">
                                <img className="w-[24px] h-[24px]" src="/images/icon-nav-recurring-bills.svg" alt="icon-nav-overview" aria-hidden="true" />
                                {!isMinimized && <span className="hidden sm:block">Recurring Bills</span>}
                            </a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
            <button className="hidden  lg:flex items-center gap-200 px-400 py-300 mb-400 w-full text-left cursor-pointer"
                onClick={() => setIsMinimized(!isMinimized)}
            >
                <img className={`transition-transform duration-300 ${isMinimized ? "rotate-180 mx-auto" : ""}`} src="/images/icon-minimize-menu.svg" alt="icon-minimize-menu" />
                {!isMinimized && <p className="text-grey-300 preset-3 group-hover:text-white transition-colors">Minimize Menu</p>}
            </button>
        </aside>
    )
}