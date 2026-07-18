import { useMemo } from "react";
import localData from '../data/data.json'


export default function usePotsData() {
    const { pots } = localData;
    const potsData = useMemo(()=>{
        if (!pots) return { list: [], totalSaved: "$0.00" }
        const totalSaved = pots.reduce((sum,pot)=>sum+pot.total,0)

        const list = pots.map((pot)=>{
            return{
                ...pot,
                name: `${pot.name}`,
                formatTotal: `$${pot.total.toFixed(2)}`,
                formattedTarget: `$${pot.target.toFixed(2)}`,
                theme:`${pot.theme}`
            }
        })
        return {
            list,
            totalSaved: `$${totalSaved.toFixed(0)}` 
        };

    },[pots])

    return{pots:potsData.list, totalSaved:potsData.totalSaved}
}