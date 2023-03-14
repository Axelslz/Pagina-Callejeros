import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import api from '../../api/api';
import "bootstrap/dist/css/bootstrap.min.css"

import AdminNavbar from './AdminNavbar';
import Footer from '../../Components/Footer';

function AdminUserList(){

    const [projectList, setProjectList] = useState([])

    useEffect(() => {
      refreshProjectList();
      console.log(projectList);
    }, [])
  
    async function refreshProjectList() {
        const ProjectAPI = await api.get(`user`);
        setProjectList(ProjectAPI.data.data);
    }
  
    return (

        <div>
            <AdminNavbar></AdminNavbar>
            <div className="p-5">
                <table className = 'table table-success table-striped table-hover table-boredered' >
                <thead>
                <tr>
                    <th scope='col'>Email</th> 
                    <th scope='col'>id</th>
                    <th scope='col'>rolId</th>
                    <th scope='col'>Acciones</th>
                </tr>
                </thead>
                <tbody >
                    {
                        Array.isArray(projectList)
                        ? projectList.map((user) => (
                            <tr key={user.id} className='justify-content-center align-items-center'>
                                <td>{user.email}</td>
                                <td>{user.id}</td>
                                <td>{user.rolId}</td>
                                <td>
                                    <Link className='btn btn-warning btn-sm mt-2 mb-2 text-white me-1 justify-content-center align-items-center' >
                                        <Icon.PencilSquare className='me-1' width={16} height={16} viewBox='0 0 17 17'></Icon.PencilSquare>
                                        Editar
                                    </Link>
                                    <button className='btn btn-danger btn-sm mt-2 mb-2 ' >
                                        <Icon.Trash className='me-1' width={16} height={16} viewBox='0 0 17 17'></Icon.Trash>
                                        Eliminar
                                    </button>


                                </td>
                            </tr>
                        ))
                    :null}
                </tbody> 
                </table>
            </div>
            <Footer></Footer>           
        </div>
    )
}

export default AdminUserList;
