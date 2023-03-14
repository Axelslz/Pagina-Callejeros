import  CardCatalogo from "../Components/CardCatalogo";
import Header from "../Components/Header";


function LoyoutCata({children}){

    return(
      <>
        <Header></Header>
          {children}
        <CardCatalogo></CardCatalogo> 
       </>
    )
}

export default LoyoutCata;