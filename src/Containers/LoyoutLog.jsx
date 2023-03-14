import  Login from "../Components/SectionLog"
import Navbar from "../Components/Navbar";


function LoyoutLog({children}){

  return(
    <>
      <Navbar></Navbar>
        {children}
      <Login></Login>
    </>
  )
}

export default LoyoutLog;