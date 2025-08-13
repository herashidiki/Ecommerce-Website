import React from 'react';
import {GrSecure} from "react-icons/gr"
import{IoFastFood} from "react-icons/io5"
import{GiFoodTruck} from "react-icons/gi"
function Banner() {
    return ( 
    <>
<div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
    <div className="container p-1rem      sm:3rem">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div data-aos ="zoom-in">
                <img   className='max-w-[400px]  h-[350px] w-full mx-auto object-cover  rounded-2xl'       src="https://i.pinimg.com/736x/79/a3/ee/79a3ee7a2116d50a16d84eef280a5399.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
  <h1 data-aos ="fade-up"   className='text-3xl sm:text-4xl font-bold capitalize'> winter sale 50%  off</h1>
  <p data-aos ="fade-up" className=' text-sm text-gray-500 tracking-wide leading-5'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias natus quod dolorem neque laboriosam recusandae amet possimus minima nobis cum. Doloremque, similique. Velit cupiditate, eveniet nemo delectus quisquam autem culpa ab error!</p>
<div className="flex-col gap-4 ">
    <div data-aos ="fade-up" className='flex items-center gap-4'>
        <GrSecure  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
        <p>Quality product</p>
    </div>
    <div data-aos ="fade-up" className='flex items-center gap-4'>
        <IoFastFood   className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
        <p> fast delivery</p>
    </div>
     <div data-aos ="fade-up" className='flex items-center gap-4'>
        <GiFoodTruck   className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
        <p> easy payment </p>
    </div>

     <div data-aos ="fade-up" className='flex items-center gap-4'>
        <GiFoodTruck   className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
        <p> get offers</p>
    </div>
</div>
            </div>
        </div>
    </div>
    
</div>







    </> );
}

export default Banner;