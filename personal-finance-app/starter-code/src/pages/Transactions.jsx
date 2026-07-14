import ImputText from "../components/ImputText";
import TransactionItem from "../components/TransactionItem"
export default function Transactions() {
    return (
        <main className="bg-beige-100 px-200 py-300 sm:px-500 sm:py-400 space-y-400">
            <h2 className="preset-1 text-grey-900">Transactions</h2>
            <section className="bg-white px-250 py-300 rounded-xl space-y-300">
                <div className="flex gap-300">
                    <ImputText />
                    <div className="flex gap-250">
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