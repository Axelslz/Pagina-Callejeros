import React from "react";
import AdminNavbar from "./AdminNavbar";
import Adminmenu from "./Adminmenu";
import Footer from "../../Components/Footer";

function Admin() {
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <div className="p-5">
            <Adminmenu></Adminmenu>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Admin;
