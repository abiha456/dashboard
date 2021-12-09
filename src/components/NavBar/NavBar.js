import {useState} from 'react';
import profile from '../../assets/images/undraw_profile.svg';
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [name, setName] = useState()
    var retrieve = JSON.parse(localStorage.getItem("loggedInUser"));
    const navigate = useNavigate()

    const handleLoad = () => {
        if(retrieve !== null) {
            setName(retrieve.loginName)
            return false;
        }
        else{console.log('user not found')}
    }

    const handleLogout = () => {
        if(retrieve !== null) {
            localStorage.removeItem("loggedInUser")
            navigate("/");
            return false;
        }
        else{navigate("/admin/dashboard");}
    }

    const handleProfile = (e) => {
        e.preventDefault()
        document.querySelector('.profile').classList.toggle('show');
        document.querySelector('.profile .dropdown-menu').classList.toggle('show');
    }
    const handleAlert = (e) => {
        e.preventDefault()
        document.querySelector('.show-alert').classList.toggle('show');
        document.querySelector('.show-alert .dropdown-menu').classList.toggle('show');
    }
    const handleMsg = (e) => {
        e.preventDefault()
        document.querySelector('.show-msgs').classList.toggle('show');
        document.querySelector('.show-msgs .dropdown-menu').classList.toggle('show');
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fa fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
            </form>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                    <div className="nav-link dropdown-toggle"  id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-search fa-fw"></i>
                    </div>
                    
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fa fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li onClick={handleAlert} className="nav-item show-alert dropdown no-arrow mx-1">
                    <div className="nav-link dropdown-toggle"  id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-bell fa-fw"></i>
                        
                        <span className="badge badge-danger badge-counter">3+</span>
                    </div>
                    
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                        </h6>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fa fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fa fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </div>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fa fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </div>
                        <div className="dropdown-item text-center small text-gray-500" >Show All Alerts</div>
                    </div>
                </li>
                <li onClick={handleMsg} className="nav-item show-msgs dropdown no-arrow mx-1">
                    <div className="nav-link dropdown-toggle"  id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-envelope fa-fw"></i>
                        
                        <span className="badge badge-danger badge-counter">7</span>
                    </div>
                    
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                                <div className="status-indicator"></div>
                            </div>
                            <div>
                                <div className="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                                <div className="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex align-items-center" >
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </div>
                        <div className="dropdown-item text-center small text-gray-500" >Read More Messages</div>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
                <li onLoad={handleLoad} onClick={handleProfile} className="nav-item dropdown no-arrow profile">
                    <div className="nav-link dropdown-toggle"  id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name}</span>
                        <img className="img-profile rounded-circle"
                            src={profile} alt=""/>
                    </div>
                    
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <div className="dropdown-item" >
                            <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </div>
                        <div className="dropdown-item" >
                            <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </div>
                        <div className="dropdown-item" >
                            <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </div>
                        <div className="dropdown-divider"></div>
                        <div onClick={handleLogout} className="dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                            <i className="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </div>
                    </div>
                </li>
            </ul> 
        </nav>
    );
}

export default NavBar;