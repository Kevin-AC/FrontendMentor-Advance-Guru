import BalanceCard from "../components/BalanceCard"
import ButtonTertiary from "../components/ButtonTertiary"
import PotsCard from "../components/PotsCard"
import TransactionItem from "../components/TransactionItem"
export default function Overview(){
    return(
        <main className="px-300 py-200 space-y-400">
            <h2 className="preset-1 text-grey-900">Overview</h2>
            <section className="flex flex-col gap-150">{/*summary */}
                <BalanceCard 
                    title={"Current Balance"} 
                    balance={"$4,836.00"}
                    />
                <BalanceCard
                    title={"Income"}
                    balance={"$3,814.25"} 
                    bgColor="bg-white"
                    titleColor="text-grey-500"
                    balanceColor="text-grey-900"
                    />
                <BalanceCard
                    title={"Expenses"}
                    balance={"$1,700.50"}
                    bgColor="bg-white"
                    titleColor="text-grey-500"
                    balanceColor="text-grey-900"
                    />
            </section>
            <section>{/*content*/}
                <section className="space-y-200">{/*left*/}
                    <section className="bg-white rounded-xl space-y-250 px-250 py-300" aria-labelledby="pots-heading">{/*frame 501*/}
                        <div className="flex justify-between items-center ">
                            <h2 className="preset-2">Pots</h2>
                            <ButtonTertiary name={"See Details"}/>
                        </div>
                        <div className="flex flex-col gap-250">
                            <div className=" bg-beige-100 rounded-xl flex p-200 gap-200">
                                <img src="/images/icon-pot.svg" alt="icon-pot" />
                                <div className="space-y-150">
                                    <p className="text-grey-500 preset-4">Total Saved</p>
                                    <p className="text-grey-900 preset-1">$850</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-200">
                                <PotsCard
                                    title={"Savings"}
                                    balance={"$150"}
                                    color={"bg-green"}
                                />
                                <PotsCard
                                    title={"Gift"}
                                    balance={"$40"}
                                    color={"bg-cyan"}
                                />
                                <PotsCard
                                    title={"Concert Ticket"}
                                    balance={"$110"}
                                    color={"bg-navy"}
                                />
                                <PotsCard
                                    title={"New Laptop"}
                                    balance={"$10"}
                                    color={"bg-yellow"}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="bg-white rounded-xl space-y-250 px-250 py-300" aria-labelledby="Transactions-heading">{/*frame 503*/}
                        <div className="flex justify-between items-center">
                            <h2 className="preset-2">Transactions</h2>
                            <ButtonTertiary name={"View All"}/>
                        </div>
                        <div className="flex flex-col">{/*Table*/}
                            <TransactionItem
                                name={"Kevin"}
                                avatar={"/images/avatars/daniel-carter.jpg"}
                                amount={34}
                                date={"26-04-2028"}
                            />
                            <TransactionItem
                                name={"Kevin"}
                                avatar={"/images/avatars/daniel-carter.jpg"}
                                amount={34}
                                date={"26-04-2028"}
                            />
                            <TransactionItem
                                name={"Kevin"}
                                avatar={"/images/avatars/daniel-carter.jpg"}
                                amount={34}
                                date={"26-04-2028"}
                            />

                        </div>
                    </section>

                </section>
                <section>{/*right*/}

                </section>
            </section>
        </main>
    )
}