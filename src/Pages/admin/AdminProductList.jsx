import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../../api/api';
import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons'
import Modal from 'react-bootstrap/Modal';


import AdminNavbar from './AdminNavbar';
import Footer from '../../Components/Footer';


function AdminProductList(){

    const [data, setData] = useState([]);
    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getDataAPI()
        console.log(data);
    }, [])

    const eliminarProducto = async (id) => {
        try {
          await api.delete(`product/${id}`);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          console.log(error);
        }
       
    }

    const getDataAPI = async () => {

        const dataInf = await api.get(`product`);
        setData(dataInf.data.data);
    }

    const addProducto = async (e) => {
        e.preventDefault()
        
        await api.post(`product`, {name,stock,price,categoryId,imageUrl})
        setTimeout(() => {
            setShow(false)
            window.location.reload();
        }, 2000);
    }

    const bodyForm = () => {
        return (
            <>
                <Modal centered="true" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Añadir Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addProducto} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Ej.: Camisa Hasbulla"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    type="number"
                                    placeholder="Ej.: 4"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text"
                                    placeholder="Ej.: Listado de colaboradores"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>iD Categoria</Form.Label>
                                <Form.Control
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    type="number"
                                    placeholder="Ej.: 1"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>URL Imagen</Form.Label>
                                <Form.Control
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    type="text"
                                    placeholder="Ej.: https://miimagen.com/imagen-1.jpeg"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Añadir
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <body>
            <AdminNavbar className="p-5"></AdminNavbar>
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <div className='container-fluid'>
                        <a className='navbar-brand'>Callejeros - Productos</a>
                        <Row>
                            <Button variant='dark' onClick={handleShow} className='btn-sm mt-2 mb-1 text-white d-flex justify-content-center align-items-center'>
                                <Icon.FileEarmarkPlus className='me-2' width={16} height={16} viewBox='0 0 16 16' ></Icon.FileEarmarkPlus>
                                Añadir Producto
                            </Button>
                            {bodyForm()}
                        </Row>
                    </div>
                </nav>
            </div>

            <div className='container-md mt-5'>
                <ListGroup >
                    <ListGroup.Item>
                        <Container fluid="md" >
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col xs={3}>
                                    <h5>Listado de Productos</h5>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Table striped >
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Stock</th>
                                    <th>Precio</th>
                                    <th>URL Imagen</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    Array.isArray(data)
                                    ? data.map((product) => (
                                        <tr key={product.id} className='justify-content-center align-items-center'>
                                            <td>{product.name}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.price}</td>
                                            <td>{product.imageUrl}</td>
                                            <td>
                                                <Link className='btn btn-warning btn-sm mt-2 mb-2 text-white me-1 justify-content-center align-items-center' >
                                                    <Icon.PencilSquare className='me-1' width={16} height={16} viewBox='0 0 17 17'></Icon.PencilSquare>
                                                    Editar
                                                </Link>
                                                <button onClick={() => eliminarProducto(product.id)} className='btn btn-danger btn-sm mt-2 mb-2 ' >
                                                    <Icon.Trash className='me-1' width={16} height={16} viewBox='0 0 17 17'></Icon.Trash>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                :null}
                            </tbody>
                        </Table>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </body>

    );

}

export default AdminProductList;