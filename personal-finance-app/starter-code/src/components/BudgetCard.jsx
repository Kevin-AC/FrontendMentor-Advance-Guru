export default function BudgetCard() {
  const budget = {
    category: "Entertainment",
    themeColor: "#277C78",
    themeBg: "bg-[#277C78]",
    themeBorder: "border-[#277C78]",
    maximum: 50.0,
    spent: 25.0,
    free: 50.0, // Dinero restante/libre
    latestTransactions: [
      { id: 1, name: "Papa Software", amount: -10.0, date: "16 Aug 2024" },
      { id: 2, name: "Quebec Services", amount: -5.0, date: "12 Aug 2024" },
      {
        id: 3,
        name: "Romeo Cloud Service",
        amount: -10.0,
        date: "10 Aug 2024",
      },
    ],
  };

  // 1. Calcular el porcentaje gastado para la barra de progreso
  const percentage = Math.min((budget.spent / budget.maximum) * 100, 100);

  return (
    <section className="bg-white p-400 rounded-xl space-y-300 w-full shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-200">
          <div
            className={`w-4 h-4 rounded-full ${budget.themeBg}`}
            aria-hidden="true"
          />
          <h3 className="text-preset-2 font-bold text-grey-900">
            {budget.category}
          </h3>
        </div>

        <button className="text-grey-300 hover:text-grey-900 transition-colors duration-150 hover:cursor-pointer">
          <img
            src="/images/icon-ellipsis.svg"
            alt="Options"
            className="w-6 h-6"
          />
        </button>
      </div>

      <p className="preset-4 text-grey-500">
        Maximum of ${budget.maximum.toFixed(2)}
      </p>

      <div className="w-full h-8 bg-beige-100 rounded-lg p-50 flex items-center">
        <div
          className={`h-full rounded-md transition-all duration-500 ${budget.themeBg}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-200 pt-100">
        <div className="flex items-stretch gap-200">
          <div
            className={`w-[4px] rounded-full ${budget.themeBg}`}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-50">
            <span className="preset-5 text-grey-500">Spent</span>
            <span className=" text-grey-900 preset-4-bold">
              ${budget.spent.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex items-stretch gap-200">
          <div
            className="w-[4px] rounded-full bg-beige-100"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-50">
            <span className="preset-5 text-grey-500">Free</span>
            <span className="preset-4-bold text-grey-900">
              ${budget.free.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-beige-100 p-200 rounded-xl space-y-250 ">
        <div className="flex items-center justify-between">
          <h3 className="preset-3 font-bold text-grey-900">
            Latest Spending
          </h3>
          <button className="flex items-center gap-150 preset-4 text-grey-500 hover:text-grey-900 transition-colors duration-150 hover:cursor-pointer">
            <span>See All</span>
            <img
              src="/images/icon-caret-right.svg"
              alt=""
              className="w-3 h-3"
              aria-hidden="true"
            />
          </button>
        </div>

        <ul className="flex flex-col divide-y divide-grey-500/15 ">
          {budget.latestTransactions.map((tx) => (
            <li
              key={tx.id}
              className="flex items-center justify-between py-150 first:pt-0 last:pb-0"
            >
              <span className="preset-5-bold text-grey-900">
                {tx.name}
              </span>

              <div className="text-right">
                <span className="preset-5-bold text-grey-900 block">
                  -${Math.abs(tx.amount).toFixed(2)}
                </span>
                <span className="preset-5 text-grey-500 font-normal mt-50 block">
                  {tx.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
