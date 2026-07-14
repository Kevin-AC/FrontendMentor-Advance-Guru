import ImputText from "../components/ImputText";
import TransactionItem from "../components/TransactionItem"
export default function Transactions() {
    return (
        <main className="bg-beige-100 px-200 py-300 sm:px-500 sm:py-400 space-y-400">
            <h2 className="preset-1 text-grey-900">Transactions</h2>
            <section className="bg-white px-250 py-300 rounded-xl space-y-300">
                <div className="flex justify-between gap-300 w-full ">{/*input fields top*/}
                    <ImputText />
                    <div className="flex gap-250 sm:hidden">
                        <button className="hover:cursor-pointer">
                            <img
                                src="/images/icon-sort-mobile.svg"
                                alt="icon-sort-mobile"
                                className="w-5 h-5"
                            />
                        </button>
                        <button className="hover:cursor-pointer">
                            <img
                                src="/images/icon-filter-mobile.svg"
                                alt="icon-filter"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>
                    <div className="w-fit sm:flex gap-300 hidden ">{/*drop down filters */}
                        <div className="flex items-center gap-150 ">
                            <span className="text-preset-5 text-grey-500 whitespace-nowrap">Sort by</span>
                            <div className="relative">
                                <select className="appearance-none w-full border border-beige-500 preset-4 rounded-lg px-250 py-150 text-preset-4 text-grey-900 font-normal focus:outline-none focus:border-grey-900 hover:cursor-pointer transition-colors duration-150">
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="highest">A to Z</option>
                                    <option value="lowest">Z to A</option>
                                    <option value="highest">Highest</option>
                                    <option value="lowest">Lowest</option>
                                </select>
                                {/* flecha abajo */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-150 pointer-events-none">
                                    <img src="/images/icon-caret-down.svg" alt="" className="w-3 h-3" aria-hidden="true" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-150 ">
                            <span className="text-preset-5 text-grey-500 whitespace-nowrap">Category</span>
                            <div className="relative">
                                <select className="appearance-none w-full sm:w-44 border border-beige-500 preset-4 rounded-lg px-250 py-150 text-preset-4 text-grey-900 font-normal focus:outline-none focus:border-grey-900 hover:cursor-pointer transition-colors duration-150">
                                    <option value="all">All Transactions</option>
                                    <option value="personal">Personal Care</option>
                                    <option value="general">General</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="bills">Bills</option>
                                </select>
                                {/* flecha abajo */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-150 pointer-events-none">
                                    <img src="/images/icon-caret-down.svg" alt="" className="w-3 h-3" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>   
                <div className="flex flex-col divide-y divide-grey-100">
                    {/*Table*/}
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        category={'Personal Care'}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        category={'Personal Care'}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        category={'Personal Care'}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                    <TransactionItem
                        name={"Kevin"}
                        category={'Personal Care'}
                        avatar={"/images/avatars/daniel-carter.jpg"}
                        amount={34}
                        date={"2028-04-26"}
                    />
                </div>
            </section>

        </main>
    );
}