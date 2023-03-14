import Header from "../Components/Header";


function LoyoutCarrito({children}){

    return(
      <>
        <Header></Header>
          {children}
        {/* <CardCatalogo></CardCatalogo> */}
       </>
    )
}

export default LoyoutCarrito;