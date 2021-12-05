import Card from './Card';
import Charts from './Charts/Charts';
import Project from './Project';
import ColorBoxes from './ColorBoxes';
import TextBox from './TextBox';

const Dashboard = () => {

    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="/" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fa fa-download fa-sm text-white-50"></i> Generate Report
            </a>
        </div>
        <Card />
        <Charts />
        <div className="row">
            <div className="col-lg-6 mb-4 mt-4">
                <Project />
                <ColorBoxes />
            </div>
            <TextBox />
        </div>
        </>
    );
}

export default Dashboard;