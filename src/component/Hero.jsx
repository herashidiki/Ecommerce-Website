import React from "react";
import Slider from "react-slick";

// import images

const ImageList = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/1b/47/25/1b472516713cb07ae18b5c1e0913f585.jpg",
    title: "upto 50% on all mens, wear",
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus ipsum eveniet, tenetur inventore ea accusamus sapiente harum magni quo excepturi nam iste. Repellendus deserunt, ipsum quibusdam nobis quos provident?",
  },

  {
    id: 2,
    img: "https://i.pinimg.com/736x/0c/37/be/0c37bee177be6baacef386d74185c756.jpg",
    title: "upto 30% on all womens, wear",
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus ipsum eveniet, tenetur inventore ea accusamus sapiente harum magni quo excepturi nam iste. Repellendus deserunt, ipsum quibusdam nobis quos provident?",
  },

  {
    id: 3,
    img: "https://i.pinimg.com/736x/a2/22/c2/a222c2ee1a0d5d83d0dd2631b0eede59.jpg",
    title: "upto 50% on all product, wear",
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus ipsum eveniet, tenetur inventore ea accusamus sapiente harum magni quo excepturi nam iste. Repellendus deserunt, ipsum quibusdam nobis quos provident?",
  },
];
function Hero({ handleOrderPopup }) {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseonHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300">
      <div className="h-[700px] w-[700px] bg-blue-500/40 absolute top -1/2  right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="container pb-8  sm:pb-0 ">
        <Slider {...setting}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <button
                      onClick={() => {
                        handleOrderPopup;
                      }}
                      className="bg-gradient-to-r from-blue-400 to bg-green-800 hover:scale-105 duration-200 text-white
                                    py-2 px-4 rounded-full"
                    >
                      {" "}
                      order now
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10"
                >
                  <img
                    src={data.img}
                    alt="slider"
                    className="w-[300px]h-[300px]            rounded-2xl sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto "
                  />
                </div>
              </div>
            </div>
          ))}
          {}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
