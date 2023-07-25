import React from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PolylineIcon from '@mui/icons-material/Polyline';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import TelegramIcon from '@mui/icons-material/Telegram';



function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="list-unstyled ps-0 navbar-nav display-flex justify-content-center mb-1 mb-lg-0">
                                        <li className="nav-item active">
                                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                                E-SMS
                                            </button>
                                            <div className="collapse" id="home-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/"><DashboardCustomizeIcon /> Dashboard</a></li>
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/inbox"><MoveToInboxIcon />   Inbox</a></li>
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/quicksend"><TelegramIcon /> Quick Send</a></li>
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/Template"><LibraryAddIcon /> Add Template</a></li>
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/schedule"><NotificationsActiveIcon /> Scheduled List</a></li>
                                                    <li><a className="ms-2 link-dark text-decoration-none rounded" href="/message"><PolylineIcon /> Messaging Logs</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;







