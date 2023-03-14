
import { Link, renderMatches } from 'react-router-dom';
import React from 'react';
import API from '../api/api'

import '../assets/Styles/Login.css'
import '../assets/Styles/Section.css'


export default class Login extends React.Component {

   state = {
      email: '',
      password: '',
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
      };


  
      const response = await API.post(`auth/token`, user)
      if(response){
        alert("Sesion iniciada")
        let UAT = response.data.data.accessToken 
        localStorage.setItem("USER_ACCESS_TOKEN", JSON.stringify(UAT))
        window.location.replace('/plantilla');
      } else{
         alert("¡Usuario o contraseña incorrectos!")
      }
  
   }


   
   render(){
    return(

     <div>
         <section id="home">
            <div className="inner-width">
               <div className="content">
                  <div>
                     <form className='form' onSubmit={this.handleSubmit}>
                        <h2 className='form_title'>Inicio Sesión</h2>
                        <p className='form_paragraph'>¿Aún no tienes una cuenta? <Link to="/register" className='form_link'>Entra aquí</Link></p>
                        <div className='form_container'>
                           <div className='form_group'>
                              <input type="email" onChange={this.handleChangeEmail} id="name" className='form_input' placeholder=''/>
                              <label  name="email" className='form_label'>Email:</label>
                              <span className='form_line'></span>
                           </div>          
                           <div className='form_group'>
                              <input type="password" onChange={this.handleChangePsw} id="password" className='form_input' placeholder=''/>
                              <label name="password"  className='form_label'>Contraseña:</label>
                              <span className='form_line'></span>
                           </div>
                           <button className='button btn btn-primary btn-block' type="submit">Login</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
     
      </div>


    )
   }  
}