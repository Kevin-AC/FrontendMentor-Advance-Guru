import Piechart from "./Piechart"
import SpendingSummary from "./SpendingSummary";

export default function Budgets(){
    return (
      <main className="space-y-400 px-200 py-300 sm:px-500 sm:py-400 bg-beige-100">
        <div className="flex justify-between">
          <h2 className="preset-1 text-grey-900">Budgest</h2>
          <button className="text-white preset-4-bold  rounded-lg p-4 bg-grey-900">
            +Add New Budget
          </button>
        </div>
        <section >
          {/*frame*/}
          {/*left*/}
          <section className="space-y-400 bg-white rounded-xl px-250 py-300">
            <div className="flex justify-center">
              <Piechart />
            </div>
            <SpendingSummary />
          </section>
          {/*right*/}
          <section></section>
        </section>
      </main>
    );
}