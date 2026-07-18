export default function SpendingSummary() {
    const summaries = [
        { id: 1, category: "Bills", spent: 250.00, total: 750.00, color: "bg-[#54B4C4]" }, // Cian
        { id: 2, category: "Dining Out", spent: 67.00, total: 75.00, color: "bg-[#F3CDAD]" }, // Beige/Naranja
        { id: 3, category: "Personal Care", spent: 65.00, total: 100.00, color: "bg-[#6260B3]" }, // Morado
        { id: 4, category: "Entertainment", spent: 25.00, total: 50.00, color: "bg-[#0B7C75]" }, // Verde azulado
    ];

    return (
      <div className="bg-white  space-y-400 w-full ">
        <h3 className="preset-2 text-grey-900 font-bold">Spending Summary</h3>
        <ul className="flex flex-col divide-y divide-grey-100">
          {summaries.map((item) => (
            <li
              key={item.id}
              className="flex gap-400 items-center justify-between py-250 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-200">
                <div
                  className={`w-1 h-5 rounded-full ${item.color}`}
                  aria-hidden="true"
                />

                <span className="text-preset-4 text-grey-500 font-normal">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center gap-100">
                <span className="text-preset-3 font-bold text-grey-900">
                  ${item.spent.toFixed(2)}
                </span>
                <span className="text-preset-5 text-grey-500 font-normal">
                  of ${item.total.toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}