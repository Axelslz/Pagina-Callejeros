import Footer from "../Components/Footer";

import LoyoutCarrito from "../Containers/LoyoutCarrito";

function Carrito({children}){

  return(
    <>
      <LoyoutCarrito></LoyoutCarrito>
        {children}
      <Footer></Footer> 
    </>
  )
}

export default Carrito;