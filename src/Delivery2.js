import './App.css';
import {Link} from "react-router-dom";

function Delivery2() {
  return (
    <div>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*<!-- Navbar Brand-->*/}
            <Link to="/index" className="navbar-brand ps-3">RAPI ENTREGA</Link>
            {/*<!-- Sidebar Toggle-->*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/*<!-- Navbar Search-->*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/*<!-- Navbar-->*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <Link to="/Profile" className="dropdown-item">Editar Perfil</Link>
                        <li><hr className="dropdown-divider" /></li>
                        <Link to="/Login" className="dropdown-item">Cerrar sesión</Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Cliente</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Envios
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link to="/Envio" className="nav-link">Solicitud</Link>
                                    <Link to="/Tracking" className="nav-link">Seguimiento</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Identificado como:</div>
                        Usuario1
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="card mb-4">
                        <div className="card-header">
                            <img src="/Imagen/Disponibilidad.jpg" width="1050px" height="250px"/>
                        </div>
                    </div>
                    <figure className="text-center">
                        <blockquote className="blockquote">
                          <p  style={{backgroundColor:'rgb(35, 35, 35)', color:'rgb(255, 255, 255)'}}>DISPONIBILIDAD</p>
                        </blockquote>
                    </figure>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Dirección</span>
                        <input type="text" className="form-control" placeholder="Ej: Carrera 111A # ..." aria-label="Username"/>
                        <span className="input-group-text" id="basic-addon1">Ciudad</span>
                        <input type="text" className="form-control" placeholder="Ej: Bogotá" aria-label="Server"/>
                        <span className="input-group-text" id="basic-addon1">Dia</span>
                        <input type="text" className="form-control" placeholder="AAAA-MM-DD" aria-label="Server"/>
                    </div>
                    <figure className="text-center">
                        <blockquote className="blockquote">
                          <p  style={{backgroundColor:'rgb(35, 35, 35)', color:'rgb(255, 255, 255)'}}>FRANJA HORARIA</p>
                        </blockquote>
                    </figure>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Desde</span>
                        <input type="text" className="form-control" placeholder="0:00:00" aria-label="Username"/>
                        <span className="input-group-text" id="basic-addon1">Hasta</span>
                        <input type="text" className="form-control" placeholder="0:00:00" aria-label="Server"/>
                    </div>
                </main>
                <div className="column" >
                        <Link to="/Delivery1" className="buttonEnd">Atras</Link>
                        <button className="buttonEnd">Guardar</button>
                        <Link to="/Delivery3" className="buttonEnd">Siguiente</Link>          
                </div>
               
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">MinTIC 2022 - GRUPO 2253 - EQUIPO 12</div>
                        </div>
                    </div>
                </footer>
            </div>
        
        </div>
    </div>


  );
}

export default Delivery2;
