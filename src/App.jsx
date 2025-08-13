import AOS from "aos"
import"aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Topproduct from "./component/TopProduct";
import Subcribe from "./component/Subcribe";
import Testmininols from "./component/Testimionials";
import Footer from "./component/Footer";

function App(){
const [Poppup , setPopup ] = useState(false)


const handlePopup =() =>{
  setPopup(!Poppup)
}

useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing :"ease-in-sine",
    delay:100,

  })
  AOS.refresh()
},[])





  return(
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar  handleOrderPopup={ handlePopup} />
      <Hero  handleOrderPopup ={handlePopup}  />
<Product />
       <Topproduct  handleOrderPopup={handlePopup}/>

      <Banner />
<Subcribe />
<Testmininols />
<Footer />
    </div>
  )
}

export default App