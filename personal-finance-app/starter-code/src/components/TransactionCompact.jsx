export default function TransactionCompact({
  name,
  avatar,
  amount,
  date,
}) {
  const isIncome = amount > 0;
  const formattedAmount = isIncome
    ? `+$${amount.toFixed(2)}`
    : `-$${Math.abs(amount).toFixed(2)}`;
  const safeDate =
    typeof date === "string" && date.includes("-") && date.indexOf("-") < 4
      ? date.split("-").reverse().join("-") // Convierte "29-08-2024" a "2024-08-29"
      : date;
  const formattedDate = new Date(safeDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
      <div className="w-full flex justify-between items-center py-200 border-b border-grey-100 last:border-0">
      <div className="flex items-center gap-200 ">
        <img
          src={avatar}
          alt={`Avatar de ${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col sm:flex-row  gap-1">
          <span className="text-preset-4 font-bold text-grey-900">{name}</span>
        </div>
      </div>
      <div className="text-right">
        <p
          className={`preset-4-bold ${isIncome ? "text-green" : "text-grey-900"}`}
        >
          {formattedAmount}
        </p>
        <span className="text-preset-5 text-grey-500 font-normal">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
