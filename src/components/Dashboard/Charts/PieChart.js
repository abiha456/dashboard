import {CanvasJSChart} from 'canvasjs-react-charts';

const PieChart = () => {

    const options = {
        animationEnabled: true,
        title: {
            text: "Revenue Sources",
            fontColor: "#2653d4",
            fontSize: 22,
            fontWeight: "normal",
            horizontalAlign: "left"
        },
        toolTip: {
            fontColor: "grey",
            borderColor: "#dddfeb",
            cornerRadius: 5,
            fontSize: 12,
            backgroundColor: "white"    
        },
        data: [{
            type: "doughnut",
            innerRadius: 100,
            startAngle: -80,
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###",
            dataPoints: [
                { name: "Direct", y: 55, color: "#2653d4" },
                { name: "Social", y: 30, color: "#1cc88a" },
                { name: "Referral", y: 15, color: "#36b9cc" }
            ]
        }]
    }

    return(
        <div className="col-xl-4 col-lg-5 py-4 pr-3 pl-3">
			<CanvasJSChart options = {options} />
        </div>
    );
}

export default PieChart;