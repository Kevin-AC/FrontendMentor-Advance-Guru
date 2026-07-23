import { useState } from "react"
import { NavLink } from "react-router-dom";
export default function Sidebard(){
    const [isMinimized, setIsMinimized]= useState(false)

    return(
        <aside className={`p-0 bottom-0 fixed lg:relative z-50  w-full  rounded-t-2xl  lg:h-full lg:rounded-t-none  lg:rounded-r-2xl bg-grey-900 flex flex-col justify-between transition-all duration-300 ${isMinimized ? "lg:w-28" : "lg:w-75"}`}>
            <div className="h-full">
                <div className="hidden lg:block px-500 py-400">
                    {isMinimized ? (
                        <img className="w-6" src="/images/logo-small.svg" alt="logo-small" />
                    ) : (
                        <img src="/images/logo-large.svg" alt="finance-logo" />
                    )}
                </div>
                <nav className="pt-150 px-200 sm:px-500 lg:pr-300 lg:px-0 h-1/2 w-full ">
                    <ul className="flex justify-between items-center  lg:items-start lg:flex-col h-full">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `
                                tabNav 
                                
                                ${isActive
                                ? "selecctedNav  "
                                    : "text-grey-300 hover:text-white"
                                }`}
                        >
                            <img className="w-[24px] h-[24px]" src="/images/icon-nav-overview.svg" alt="icon-nav-overview" aria-hidden="true" />
                            {!isMinimized && <span className="hidden sm:block sm:preset-5-bold lg:preset-3 ">Overview</span>}
                        </NavLink>
                        <NavLink to="/transactions"  className={({ isActive }) => `
                                   tabNav
                                ${isActive
                                ? "selecctedNav  "
                                : "text-grey-300 hover:text-white"
                            }`}>
                            <img className="w-[24px] h-[24px]" src="/images/icon-nav-transactions.svg" alt="icon-nav-overview" aria-hidden="true" />
                            {!isMinimized && <span className="hidden sm:block sm:preset-5-bold lg:preset-3">Transactions</span>}
                        </NavLink>
                        <NavLink to="/budgets"
                            className={({ isActive }) => `
                                   tabNav
                                ${isActive
                                ? "selecctedNav  "
                                    : "text-grey-300 hover:text-white"
                                }`}>
                            <img className="w-[24px] h-[24px]" src="/images/icon-nav-budgets.svg" alt="icon-nav-overview" aria-hidden="true" />
                            {!isMinimized && <span className="hidden sm:block sm:preset-5-bold lg:preset-3">Budgets</span>}
                            
                        </NavLink>
                        <NavLink to="/pots"
                            className={({ isActive }) => `
                                   tabNav
                                ${isActive
                                ? "selecctedNav  "
                                    : "text-grey-300 hover:text-white"
                                }`}>
                            <img className="w-[24px] h-[24px]" src="/images/icon-nav-pots.svg" alt="icon-nav-overview" aria-hidden="true" />
                            {!isMinimized && <span className="hidden sm:block sm:preset-5-bold lg:preset-3">Pots</span>}
                        </NavLink>
                        <NavLink to="/recurring-bills"
                            className={({ isActive }) => `
                                   tabNav
                                ${isActive
                                ? "selecctedNav"
                                    : "text-grey-300 hover:text-white"
                                }`}>
                            <img className="w-[24px] h-[24px]" src="/images/icon-nav-recurring-bills.svg" alt="icon-nav-overview" aria-hidden="true" />
                            {!isMinimized && <span className="hidden sm:block sm:preset-5-bold lg:preset-3">Recurring Bills</span>}
                        </NavLink>
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