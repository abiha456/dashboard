import {CanvasJSChart} from 'canvasjs-react-charts';

const AreaChart = () => {

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Earnings Overview",
            fontColor: "#2653d4",
            fontSize: 22,
            fontWeight: "normal",
            horizontalAlign: "left"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            fontColor: "grey",
            borderColor: "#dddfeb",
            cornerRadius: 5,
            fontSize: 12,
            backgroundColor: "white"    
        },
        data: [{
            type: "splineArea",
            color: "#2653d4",
            fillOpacity: 0.05,
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            toolTipContent: "<b>{x}</b><br>Earnings: {y}",
            dataPoints: [
                { x: new Date(2021, 1), y: 0 },
                { x: new Date(2021, 2), y: 10000 },
                { x: new Date(2021, 3), y: 5000 },
                { x: new Date(2021, 4), y: 15000 },
                { x: new Date(2021, 5), y: 10000 },
                { x: new Date(2021, 6), y: 20000 },
                { x: new Date(2021, 7), y: 15000 },
                { x: new Date(2021, 8), y: 25000 },
                { x: new Date(2021, 9), y: 20000 },
                { x: new Date(2021, 10), y: 30000 },
                { x: new Date(2021, 11), y: 25000 },
                { x: new Date(2021, 12), y: 40000 }
            ]
        }]
    }

    return (
        <div className="col-xl-8 col-lg-7 py-4 pr-3 pl-3">
            <CanvasJSChart options = {options} />
        </div>
    );
}

export default AreaChart;