import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/NavBar";
import routes from '../../routes'
import {Routes, Route} from 'react-router-dom';

const Admin = () => {
    
    const switchRoutes = (
        <Routes>
            {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                <Route
                    path={prop.path}
                    element={prop.component}
                    key={key}
                />
                );
            }
            return null;
            })}
        </Routes>
    )
    console.log(switchRoutes);

    return(
        <div id="wrapper">
            <Sidebar />
            <div  id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        {switchRoutes}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;