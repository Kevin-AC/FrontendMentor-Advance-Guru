import ImputText from "../components/ImputText";

export default function Transactions(){
    return(
        <main className="bg-beige-100 px-200 py-300 sm:px-500 sm:py-400">
            <h2 className="preset-1 text-grey-900">Transactions</h2>
            <section className="bg-white px-250 py-300 rounded-xl">
                <div className="flex gap-300">
                    <ImputText/>
                    <div className="flex gap-250">
                        <button className="hover:cursor-pointer">
                            <img src="/images/icon-sort-mobile.svg" alt="icon-sort-mobile" className="w-5 h-5" />
                        </button>
                        <button className="hover:cursor-pointer">
                            <img src="/images/icon-filter-mobile.svg" alt="icon-filter" className="w-5 h-5" />
                        </button>
                        
                    </div>
                </div>
            </section>

        </main>
    )
}