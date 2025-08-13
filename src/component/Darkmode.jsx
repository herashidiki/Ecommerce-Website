import React, { useEffect, useState } from 'react';
function Dark() {
    const [theme , settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") :"light");

 const element = document.documentElement;
 useEffect(() =>{
    if(theme == "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme" ,"dark");
    }else{
        element.classList.remove("dark");
        localStorage.setItem("theme" ,"light")
    }
 });



    return ( 
        <>
<div className="relative">
    <img src="https://i.pinimg.com/736x/19/bf/de/19bfde06e1df81e7aba7d99b0e9c4cf6.jpg" 
      onClick={() =>{
        settheme(theme == "light" ? "dark" :"light")
      }}   className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0":"opacity-100"}`}  />

      <img src="https://i.pinimg.com/736x/ea/8a/bf/ea8abf233ebe20b4beaa2f132402eb87.jpg"  onClick={() =>{
        settheme(theme === "light" ? "dark" :"light")
      }}
      
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 '/>
</div>
        </>
     );
}

export default Dark;