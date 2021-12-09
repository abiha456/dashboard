import logo from '../../assets/images/undraw-rocket.svg';
import {Link} from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap'

const Sidebar = () => {

    const sidebarToggle = () => {
        document.body.classList.toggle('sidebar-toggled')
        document.querySelector('.sidebar').classList.toggle('toggled')
        document.querySelector('.sidebarToggle').classList.toggle('toggled')
    }

    return (
        <Nav className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fa fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>
            <hr className="sidebar-divider my-0"></hr>

            <Nav.Item className="nav-item active">
                <Link to="/admin/dashboard" className="nav-link">
                    <i className="fa fa-fw fa-tachometer"></i>
                    <span>Dashboard</span>
                </Link>
            </Nav.Item>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
                Interface
            </div>
            <Nav.Item>
                <NavDropdown title={<span><i className="fa fa-fw fa-cog"></i> Components</span>}>
                    <h6 className="collapse-header">Custom Components:</h6>
                    <NavDropdown.Item><Link to="/admin/buttons">Buttons</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/admin/cards">Cards</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            <Nav.Item>
                <NavDropdown title={<span><i className="fa fa-fw fa-wrench"></i> Utilities</span>}>
                <h6 className="collapse-header">Custom Utilities:</h6>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/color">Colors</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/borders">Borders</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/animations">Animations</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/other">Other</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
                Addons
            </div>
            <Nav.Item>
                <NavDropdown title={<span><i className="fa fa-fw fa-folder"></i> Pages</span>}>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/*">404 Page</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="collapse-item" to="/admin/blank">Blank Page</Link></NavDropdown.Item>
                </NavDropdown> 
            </Nav.Item>
            <Nav.Item>
                <Link to="/admin/chart" className="nav-link">
                    <i className="fa fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/admin/table" className="nav-link">
                    <i className="fa fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </Nav.Item>
            
            <hr className="sidebar-divider d-none d-md-block"></hr>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0 sidebarToggle toggled" id="sidebarToggle" onClick={sidebarToggle}></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={logo} alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <div className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</div>
            </div>

        </Nav>
    )
}

export default Sidebar;