import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function AdminNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-4">
            <a className="navbar-brand">Callejeros Admin</a>
            <ul className='navbar-nav mr-auto'>
                <li class="nav-item active">
                    <a class="nav-link" ><Link to="/admin" className='form_link'>Admin Dashboard</Link><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" ><Link to="/" className='form_link'>Tienda</Link></a>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
}

export default AdminNavbar;
