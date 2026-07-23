import BalanceCard from "../components/BalanceCard";
import ButtonTertiary from "../components/ButtonTertiary";
import Piechart from "../components/Piechart";
import PotsCard from "../components/PotsCard";
import RecurringCard from "../components/RecurringCard";
import TransactionItem from "../components/TransactionItem"
import useFinancialData from "../hooks/useFinancialData";
import usePotsData from "../hooks/usePotsData";
import useTransactionsData from "../hooks/useTransactionsData";

export default function Overview() {
  const{balance}= useFinancialData();
  const { pots, totalSaved }=usePotsData();
  const {transactions}=useTransactionsData();
  return (
      <main className="space-y-400 px-200 py-300 sm:px-500 sm:py-400 bg-beige-100 pb-24">
      <h2 className="preset-1 text-grey-900">Overview</h2>
      <section className="lg:w-265  flex flex-col sm:flex-row gap-150 lg:gap-300 ">
        {/*summary */}
        <BalanceCard 
          title={"Current Balance"} 
          balance={balance.current} />
        <BalanceCard
          title={"Income"}
          balance={balance.income}
          bgColor="bg-white"
          titleColor="text-grey-500"
          balanceColor="text-grey-900"
        />
        <BalanceCard
          title={"Expenses"}
          balance={balance.expenses}
          bgColor="bg-white"
          titleColor="text-grey-500"
          balanceColor="text-grey-900"
        />
      </section>
      <section className=" lg:w-265 space-y-300 lg:flex lg:gap-300 ">
        {/*content*/}
        <section className=" lg:w-152 space-y-200 ">
          {/*left*/}
          <section
            className="bg-white rounded-xl space-y-250 px-250 py-300 sm:p-400"
            aria-labelledby="pots-heading"
          >
            {/*frame 501*/}
            <div className="flex justify-between items-center ">
              <h2 className="preset-2">Pots</h2>
              <ButtonTertiary name={"See Details"} />
            </div>
            <div className="flex flex-col sm:flex-row gap-250">
              <div className="sm:w-62 bg-beige-100 rounded-xl flex sm:items-center p-200 gap-200">
                <img
                  className="w-10 h-10"
                  src="/images/icon-pot.svg"
                  alt="icon-pot"
                />
                <div className="space-y-150">
                  <p className="text-grey-500 preset-4">Total Saved</p>
                  <p className="text-grey-900 preset-1">{totalSaved}</p>
                </div>
              </div>
              <div className="sm:w-89 grid grid-cols-2 gap-200">
                {pots.slice(0,4).map((pot,index)=>(
                  <PotsCard
                    key={index}
                    title={pot.name}
                    balance={pot.formatTotal}
                    color={pot.theme}
                  />
                ))}
              </div>
            </div>
          </section>
          <section
            className="bg-white rounded-xl space-y-250 sm:space-y-400 px-250 py-300 sm:p-400"
            aria-labelledby="Transactions-heading"
          >
            {/*frame 503*/}
            <div className="flex justify-between items-center">
              <h2 className="preset-2">Transactions</h2>
              <ButtonTertiary name={"View All"} />
            </div>
            <div className="flex flex-col w-full">
              {transactions.slice(0, 5).map((tx, index) => (
                <TransactionItem key={index} variant="compact" {...tx} />
              ))}
              
            </div>
          </section>
        </section>
        <section className="lg:w-107 space-y-200 ">
          {/*right*/}
          <section
            className="bg-white rounded-xl space-y-250  px-250 py-300 sm:p-400"
            aria-labelledby="pots-heading"
          >
            {/*frame 501*/}
            <div className="flex justify-between items-center ">
              <h2 className="preset-2">Budgets</h2>
              <ButtonTertiary name={"See Details"} />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-200 ">
              <div className="w-full sm:w-96 lg:w-fit flex justify-center">
                <Piechart />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-200 ">
                <PotsCard
                  title={"Entertainment"}
                  balance={"$50.00"}
                  color={"bg-green"}
                />
                <PotsCard
                  title={"Bills"}
                  balance={"$750.00"}
                  color={"bg-cyan"}
                />
                <PotsCard
                  title={"Dining Out"}
                  balance={"$75.00"}
                  color={"bg-yellow"}
                />

                <PotsCard
                  title={"Personal Care"}
                  balance={"$100.00"}
                  color={"bg-navy"}
                />
              </div>
            </div>
          </section>
          <section
            className="bg-white rounded-xl space-y-250 sm:space-y-400 px-250 py-300 sm:p-400"
            aria-labelledby="bills"
          >
            {/*frame 502*/}
            <div className="flex justify-between items-center ">
              <h2 className="preset-2">Recurring Bills</h2>
              <ButtonTertiary name={"See Details"} />
            </div>
            <div className="flex flex-col gap-250 lg:gap-150">
              <RecurringCard
                title={"Paid Bills"}
                balance={"$190.00"}
                color={"bg-green"}
                className={"border-l-green"}
              />
              <RecurringCard
                title={"Total Upcoming"}
                balance={"$194.98"}
                color={"bg-yellow"}
                className={"border-l-yellow"}
              />
              <RecurringCard
                title={"Total Upcoming"}
                balance={"$194.98"}
                color={"bg-cyan"}
                className={"border-l-cyan"}
              />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
