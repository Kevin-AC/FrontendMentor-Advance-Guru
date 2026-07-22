import TransactionCompact from "./TransactionCompact";
import TransactionRow from "./TransactionRow";
export default function TransactionItem({variant = "table",...props}){
  if (variant === "compact") {
    return <TransactionCompact {...props} />;
  }

  return <TransactionRow {...props} />;
}