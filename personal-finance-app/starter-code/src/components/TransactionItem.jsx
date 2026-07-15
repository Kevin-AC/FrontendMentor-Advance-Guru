export default function TransactionItem({ name, avatar, amount, date,category }) {
    const isIncome = amount > 0;
    const formattedAmount = isIncome ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
    const safeDate = typeof date === 'string' && date.includes('-') && date.indexOf('-') < 4
        ? date.split('-').reverse().join('-') // Convierte "29-08-2024" a "2024-08-29"
        : date;
    const formattedDate = new Date(safeDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return (
      <tr className="hover:bg-beige-100/30 transition-colors duration-150">
        <td className="py-250 pr-200">
          <div className="flex items-center gap-200">
            <img
              src={avatar}
              alt={`Avatar de ${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-preset-4 font-bold text-grey-900">
              {name}
            </span>
          </div>
        </td>
        <td className="py-250 pr-200 text-preset-5 text-grey-500">
           {category}
        </td>
        <td className="py-250 pr-200 text-preset-5 text-grey-500">
          {formattedDate}
        </td>
        <td className={`py-250 text-right preset-4-bold ${isIncome ? "text-green" : "text-grey-900"}`}>
          {formattedAmount}
        </td>
      </tr>
    );
}