// import {Routes, Route } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/NavBar";
import Table from '../Table/Table';

const Admin = () => {
    return(
        <div id="wrapper">
            <Sidebar />
            <div  id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;