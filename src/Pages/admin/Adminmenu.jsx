import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


function products(){
    window.location.replace("/admin-products");
}

function users(){
    window.location.replace("/admin-users");
}


function Adminmenu() {
  return (
    <div classname="section">
      <div className="row">
        <div className="col-sm-6">
          <div className="card border-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Productos</h5>
              <p className="card-text">
                Visualise y registre nuevos productos.
              </p>
              <button type="button" className=" btn btn-outline-success btn-block">
                <Link to="/admin-plist" className='form_link'><a href="">Vamos</a></Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card border-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Usuarios</h5>
              <p className="card-text">
                Visualise usuarios registrados en el sistema.
              </p>
              <button type="button" className="btn btn-outline-primary btn-block">
                <Link to="/admin-ulist" className='form_link'><a href="">Vamos</a></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminmenu;