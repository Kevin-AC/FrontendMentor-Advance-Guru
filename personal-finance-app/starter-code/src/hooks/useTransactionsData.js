import { useMemo } from "react";
import localData from '../data/data.json'

export default function useTransactionsData(){
    const { transactions } = localData;

    const processTransactions= useMemo(()=>{
        if(!transactions) return []
        return transactions.map((trans)=>{
            const isIncome =  trans.amount>0;
            const absoluteAmount = Math.abs(trans.amount).toFixed(2);
            const formatAmount = isIncome ? `+$${absoluteAmount}` : `-$${absoluteAmount}`;
            const date= new Date(trans.date);
            const formatDate = date.toLocaleDateString("en-GB",{
                day:"2-digit",
                month:"short",
                year:"numeric"
            })
            return {
                ...trans,
                isIncome,
                formatAmount,
                formatDate
            }
        })
        
    },[transactions])
    
    return{transactions:processTransactions}
}