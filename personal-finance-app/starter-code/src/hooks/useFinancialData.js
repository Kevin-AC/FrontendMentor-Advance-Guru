import { useMemo } from "react";
import localData from '../data/data.json'

export default function useFinancialData(){
    const { balance }=localData;
    
    const formatBalance = useMemo(()=>{
        if(!balance) return {current:'$0.00',income:'$0.00',expenses:'$0.00'}
        return{
            current: `$${balance.current.toFixed(2)}`,  
            income: `$${balance.income.toFixed(2)}`,     
            expenses: `$${balance.expenses.toFixed(2)}`   
        }
    },[balance])
    return{balance:formatBalance}
}