import th3 from '../assets/Img/rv-logo.png'
import '../assets/Styles/Footer.css'

function Footer(){

    return(

        <footer className="footer-distributed">

            <div className="footer-left">
           
             <img src={th3} alt="Logo"  width="50" height="44" className="logo"/>
        
                <p className="footer-links">
                  <a href="#">Preguntas Frecuentes</a>
                
                  <a href="#">Términos y condiciones</a>
                
                  <a href="#">Contact</a>

                  <a href="#">Blog</a>
                </p>
        
             <p className="footer-company-name">Copyright © 2022 <strong>Callejeros</strong> Todos los derechos reservados</p>
            </div>
        
         <div className="footer-center">
            <div>
                <p><span></span>
                    Callejeros
                </p>
              <br></br>
            </div>
        
            <div>
                <br></br>
                <p>+52 961-701-65-01</p>
            </div>

            <div>
              <br></br>
                <p><a href="mailto:sagar00001.co@gmail.com">Callejerostylo@gmail.com</a></p>
            </div>



        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>Acerca de la compañia</span>
                <strong>Callejeros</strong> Somos una marca de ropa 100% mexicana inspirada en un estilo de vida urbano, enfocada en crear diseños únicos, vanguardistas y casuales.</p>
          
        </div>
        </footer>
        
        
            
    )
}

export default Footer;