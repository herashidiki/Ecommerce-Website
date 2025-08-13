import React from "react";
import { FaStar } from "react-icons/fa6";

const productData = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/be/f9/04/bef904479618cf69c969eb5bbb7e0295.jpg",
    title: "Women wear",
    rating: "5.0",
    aosDelay: "0",
  },

  {
    id: 2,
    img: "https://i.pinimg.com/1200x/fc/ff/d2/fcffd2d90832e97652d8380be4c03d1d.jpg",
    title: "accessories ",
    rating: "2.0",
    aosDelay: "200",
  },

  {
    id: 3,
    img: "https://i.pinimg.com/736x/21/28/1b/21281b4fbe857d8d54c8a2fa08d4f0e0.jpg",
    title: "mens wear",
    rating: "5.5",
    aosDelay: "400",
  },

  {
    id: 4,
    img: "https://i.pinimg.com/736x/31/e3/37/31e337e908e2a9b3aeced38edc759098.jpg",
    title: "Women gold jewelry",
    rating: "3.5",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/736x/47/67/69/476769f82968a5ab6889955ffa47b432.jpg",
    title: "shirts/t-shirts",
    rating: "2.5",
    aosDelay: "800",
  },

   {
    id: 6,
    img: "https://i.pinimg.com/736x/bc/6b/2f/bc6b2fcabfa196122125628188b39913.jpg",
    title: "fragrance perfume",
    rating: "3.6",
    aosDelay: "800",
  }, {
    id: 7,
    img: "https://i.pinimg.com/736x/ed/b4/bf/edb4bf32a360f5a222117282cf86aa4f.jpg",
    title: "mens accessories",
    rating: "5.0",
    aosDelay: "1100",
  }, {
    id: 8,
    img: "https://i.pinimg.com/736x/ef/24/02/ef24029c246aae6767d92107114b2588.jpg",
    title: "trendy hoddies",
    rating: "4.0",
    aosDelay: "1400",
  }, {
    id: 9,
    img: "https://i.pinimg.com/736x/08/fc/af/08fcafae966de5358c9801592dec777c.jpg",
    title: "ethical fashion",
    rating: "3.5",
    aosDelay: "1700",
  }, {
    id: 10,
    img: "https://i.pinimg.com/1200x/87/cc/e5/87cce53050c91be0c4652826c78a4254.jpg",
    title: "bride clothes ",
    rating: "4.0",
    aosDelay: "2000",
  },
];

function Product() {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w -[600px]  mx-auto">
            <p data-aos="fade-up" className="text-xl text-blue-300/40  capitalize font-bold  shadow-2xl">
              {" "}
              TOP selling products for you
            </p>
            <h1 data-aos ="fade-up"  className="text-3xl font-bold capitalize "> product</h1>

            <p data-aos="fade-up" className="text-xs text-gray-400  font-mono">
              FASHION ELITE TO THE NEXT TOP TREND
            </p>

          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {productData.map((data) =>(
                <div data-aos="fade-up"    data-aos-delay={data.aosDelay}         key={data.id}       className="space-y-3">
                  <img src={data.img} alt="cover img"   className="h-[220px] w-[305px] object-cover rounded-md"/> 
                  <div >
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                  </div>

              ))}
            </div>
            <div className="flex justify-center ">
              <button className="text-center mt-10 cursor-pointer bg-rose-400 hover:bg-rose-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 py-1 px-5 rounded-md font-serif "> veiw all button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
