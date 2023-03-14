import Navbar from "../Components/Navbar"
import Auth from "../Components/SectionReg"


function Reg({children}){
    return(
        <>
       
       <Navbar></Navbar>
        {children}
     
      <Auth></Auth>
        </>

    )
}

export default Reg;