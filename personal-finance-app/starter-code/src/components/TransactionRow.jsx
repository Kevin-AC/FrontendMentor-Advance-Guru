export default function TransactionRow({ avatar, name, category, formattedDate, formattedAmount, isIncome }) {
    return (
        <tr className="hover:bg-beige-100/30 transition-colors duration-150 border-b border-grey-100/50">
            <td className="py-250 pr-200 w-2/5 sm:w-2/4 align-middle">
                <div className="flex items-center gap-200">
                    <img
                        src={avatar}
                        alt={`Avatar de ${name}`}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-50">
                        <span className="text-preset-4 font-bold text-grey-900 leading-none">
                            {name}
                        </span>
                        <span className="text-preset-5 text-grey-500 sm:hidden">
                            {category}
                        </span>
                    </div>
                </div>
            </td>

            <td className="py-250 pr-200 text-preset-5 text-grey-500 hidden sm:table-cell align-middle whitespace-nowrap">
                {category}
            </td>

            <td className="py-250 pr-200 text-preset-5 text-grey-500 hidden sm:table-cell align-middle whitespace-nowrap">
                {formattedDate}
            </td>

            <td className="py-250 text-right align-middle whitespace-nowrap">
                <div className="flex flex-col items-end justify-center">
                    <p className={`preset-4-bold ${isIncome ? "text-green" : "text-grey-900"}`}>
                        {formattedAmount}
                    </p>
                    <span className="text-preset-5 text-grey-500 font-normal sm:hidden mt-50">
                        {formattedDate}
                    </span>
                </div>
            </td>
        </tr>
    );
}