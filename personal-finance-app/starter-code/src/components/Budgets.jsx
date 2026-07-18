import BudgetCard from "./BudgetCard";
import Piechart from "./Piechart"
import SpendingSummary from "./SpendingSummary";

export default function Budgets(){
    return (
      <main className="space-y-400 px-200 py-300 sm:px-500 sm:py-400 bg-beige-100 mb-20">
        <div className="flex justify-between">
          <h2 className="preset-1 text-grey-900">Budgest</h2>
          <button className="text-white preset-4-bold  rounded-lg p-4 bg-grey-900 hover:cursor-pointer">
            +Add New Budget
          </button>
        </div>
        <section className="flex flex-col gap-10">
          {/*left*/}
          <section className="sm:flex sm:justify-between items-center  gap-8 bg-white rounded-xl px-250 py-300 sm:p-400">
            <div className="flex justify-center ">
              <Piechart />
            </div>
            <div className="flex justify-center ">
                <SpendingSummary />
            </div>
          </section>
          {/*right*/}
          <section className="space-y-300">
            <BudgetCard/>
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
          </section>
        </section>
      </main>
    );
}