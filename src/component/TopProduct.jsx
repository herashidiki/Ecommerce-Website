import React from "react";
import { FaStar } from "react-icons/fa6";

const TopProductData = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/16/b8/1b/16b81b5f35d3f497a8df4234d27584d3.jpg",
    title: "printed wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },

  {
    id: 2,
    img: "https://i.pinimg.com/736x/5f/e4/bc/5fe4bcb195b6bc7e7b8e02a5cb1bf75f.jpg",
    title: "casually wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },

  {
    id: 3,
    img: "https://i.pinimg.com/736x/b8/6f/fd/b86ffd07bda0ce1dc563c69018d8a5f6.jpg",
    title: "slik shirts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },

  {
    id: 4,
    img:"https://i.pinimg.com/736x/af/55/8e/af558e6b2a8e8884efff073ae75ee02e.jpg",
    title: "modern wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },

  {
    id: 5,
    img: "https://i.pinimg.com/736x/7b/72/8f/7b728f6f3ee543c07138b272aaed03a8.jpg",
    title: "classic women wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },

   {
    id: 6,
    img: "https://i.pinimg.com/736x/1c/63/9a/1c639a98a9ed2907ce028f42927d86f6.jpg",
    title: " trendy outfits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem blanditiis nisi eum repudiandae, optio maiores distinctio! Deserunt odio ipsum quasi perferendis accusamus libero tenetur quis! Voluptas dolores pariatur fugiat.",
  },
];

function Topproduct({ handleOrderPopup }) {
  return (
    <div className="container">
      <div className="text-left mb-24  capitalize">
        <p data-aos="fade-up" className="text-sm text-blue-400 font-mono  ">
          {" "}
          top rated products for u
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          {" "}
          best-product
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis
          omnis corporis ex harum eius odit, nostrum, hic et sit sint vitae,
          magni ea vel consectetur dolor beatae nisi tempore?
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center p-2.5">
            {TopProductData.map((data) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80  dark:hover:bg-blue-400 hover:text-white relative  shadow-xl duration-300 group max-w-[300px]  px-5 py-1
                text-center" key={data.id}
              >
                <div className="">
                    <img src={data.img} alt=""  className="max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md rounded-2xl" />
                </div>
                <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className ="text-yellow-500"/>
                    <FaStar className ="text-yellow-500"/>
                    <FaStar className ="text-yellow-500"/>
                    <FaStar className ="text-yellow-500"/>

                </div>
                <h1 className="text-xl font-bold ">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                </p>
                <button className=" bg-blue-700 hover:scale-105 duration-300 text-white px-4 py-1
                rounded-full mt-4 group-hover:bg-white group-hover:text-blue-300 "    onClick={handleOrderPopup}> order now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topproduct;
