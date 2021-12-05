import {CanvasJSChart} from 'canvasjs-react-charts';
import Charts from '../Dashboard/Charts/Charts';

const Chart = () => {

    const options = {
        theme: "light2",
        title: {
            text: "Bar Chart"
        },
        dataPointWidth: 30,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            color: "#2653d4",
            yValueFormatString: "$#,###",
            toolTipContent: "<b>{x}</b><br>Revenue: {y}",
            dataPoints: [
                { label: "January",  y: 4215  },
                { label: "February", y: 5312  },
                { label: "March", y: 6251  },
                { label: "April",  y: 7841  },
                { label: "May",  y: 9821  },
                { label: "June",  y: 14984  }
            ]
        }
        ]
    }

    return (
        <>
        <h1 class="h3 mb-2 text-gray-800">Charts</h1>
        <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
            The charts below have been customized - for further customization options, please visit the <a href="https://www.chartjs.org/docs/latest/">official Chart.js
                documentation</a>.</p>
        <Charts />
        <div className="col-xl-8 col-lg-7 mt-4">
            <CanvasJSChart options = {options} />
        </div>
        </>
    );
}

export default Chart;