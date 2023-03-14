import React from 'react';
import axios from 'axios';

import API from '../api/api'


import '../assets/Styles/Register.css'

export default class Auth extends React.Component {





  state = {
    email: '',
    password: '',
    rolId: 2,
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value});
  }

  handleChangePsw = event => {
    this.setState({ password: event.target.value});
  }

  

  handleSubmit = async event => {


    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      rolId: this.state.rolId
    };

    const response = await API.post(`user`, user)
    if(response){
      alert("Usuario registrado con exito")
      window.location.replace("/login");
    }else{
      alert("Ocurrio un error al registrarse")
    }

  }


  render(){


      return(

      <div>
      < section id="home">
          <div className="inner-width">
              <div className="content">
              
                
          <div className="container">
          <div className="title">Registro</div>
          <div className="content">
            <form action="#" onSubmit={this.handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Nombre Completo</span>
                  <input type="text" placeholder="Ingrese nombre completo" required/>
                </div>
                <div className="input-box">
                  <span className="details">Nombre de Usuario</span>
                  <input type="text" name="name" placeholder="Ingrese usuario" required/>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" name="email" onChange={this.handleChangeEmail} placeholder="Ingrese email" required/>
                </div>
                <div className="input-box">
                  <span className="details"> Numero de telefono</span>
                  <input type="text" placeholder="Ingrese numero" required/>
                </div>
                <div className="input-box">
                  <span className="details">Contraseña</span>
                  <input type="password" name="password" onChange={this.handleChangePsw} placeholder="Ingrese contraseña" required/>
                </div>
                <div className="input-box">
                  <span className="details">Confirmar contraseña</span>
                  <input type="password" placeholder="Confirme contraseña" required/>
                </div>
              </div>
          
              <div className="button">
                <button className='button btn btn-primary btn-block' type="submit">Registrarme</button>
              </div>
            </form>
          </div>
        </div>



              </div>
          </div>
        </section>
        
        </div>

      )
  }
}
