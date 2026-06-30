export default function TransactionItem({ name, avatar, amount, date }) {
    const isIncome = amount > 0;
    const formattedAmount = isIncome ? `+$${amount.toFixed(2)}` : `-$${Math.abs(amount).toFixed(2)}`;
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className="flex justify-between items-center py-200 border-b border-grey-100 last:border-b-0">
     
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

  
            <div className="text-right space-y-50">
                <p className={`text-preset-4 font-bold ${isIncome ? "text-green" : "text-grey-900"}`}>
                    {formattedAmount}
                </p>
                <p className="text-preset-5 text-grey-500 font-normal">
                    {formattedDate}
                </p>
            </div>
        </div>
    );
}