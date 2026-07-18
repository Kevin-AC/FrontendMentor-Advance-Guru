import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Piechart() {
    // Creamos la referencia para el contenedor del gráfico
    const chartRef = useRef(null);

    useEffect(() => {
        // Verificamos que el contenedor exista en el DOM
        if (!chartRef.current) return;

        // 1. Inicializamos el gráfico apuntando a la referencia de React
        const myChart = echarts.init(chartRef.current);

        // 2. Definimos las opciones (Aquí es donde pones tu configuración)
        const option = {
            title: {
                text: '$338',                     // Tu dato dinámico del gasto actual
                subtext: 'of $975 limit',         // Tu dato dinámico del límite total
                left: 'center',                   // Lo centra horizontalmente
                top: 'center',                    // Lo centra verticalmente
                textStyle: {
                    fontSize: 32,                   // Equivale a tu text-preset-1 (32px)
                    fontWeight: 'bold',
                    color: '#201f24'                // Tu color --color-grey-900
                },
                subtextStyle: {
                    fontSize: 12,                   // Equivale a tu text-preset-5 (12px)
                    color: '#696868'                // Tu color --color-grey-500
                }
            },
            
            legend: {
                show:false
            },
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '90%'],
                    avoidLabelOverlap: false,
                    label: { show: false },
                    silent: true,
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 50.00, name: 'Entertainment', itemStyle: { color:"#277C78" }, },
                        { value: 750.00, name: 'Bills', itemStyle: { color: "#82C9D7" }, },
                        { value: 175.00, name: 'Dining Out', itemStyle: { color: "#F2CDAC" }, },
                        { value: 100.00, name: 'Personal Care', itemStyle: { color: "#626070" }, },
                    ]
                },
                {
                    type: 'pie',
                    radius: ['57%', '65%'], 
                    avoidLabelOverlap: false,
                    label: { show: false },
                    silent: true, 
                    itemStyle: {
                        opacity: 0.7 
                    },
                    data: [
                        { value: 50.00, name: 'Entertainment', itemStyle: { color: "#277C78" } },
                        { value: 750.00, name: 'Bills', itemStyle: { color: "#82C9D7" } },
                        { value: 175.00, name: 'Dining Out', itemStyle: { color: "#F2CDAC" } },
                        { value: 100.00, name: 'Personal Care', itemStyle: { color: "#626070" } },
                    ]
                }
            ]
        };

        // 3. Le pasamos las opciones al gráfico
        myChart.setOption(option);

        // 4. Limpieza: Destruimos el gráfico si el componente se desmonta
        return () => {
            myChart.dispose();
        };
    }, []); // Se ejecuta una sola vez al cargar el componente

    return (
        // El contenedor debe tener dimensiones claras para que ECharts dibuje dentro
        <div className="w-62 h-62">
            <div ref={chartRef} className="w-full h-full" />
        </div>
    );
}