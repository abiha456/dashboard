import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/NavBar";
import Dashboard from '../Dashboard/Dashboard'

const Admin = () => {
    return(
        <>
            <Sidebar />
            <div  id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;