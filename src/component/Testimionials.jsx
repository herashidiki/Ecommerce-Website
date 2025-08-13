import React from "react";
import Slider from "react-slick";

const TestmininolsData = [
  {
    id: 1,
    name: "shine",
    text:"Honestly, I was blown away by the service and quality at [Fashion Clothing Shop]. I've been searching for the perfect dress for ages, and the staff helped me find it in like 10 minutes. The prices were super reasonable, and the dress fit like a glove. I've worn it to a few events already, and I get compliments every time. I'm definitely hooked on this shop now - the staff are friendly, the clothes are amazing, and the whole experience is just so enjoyable. Five stars, hands down! ",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 2,
    name: "vulgar",
    text: " [shop me] is my fashion therapist! Whenever I'm feeling down, I just walk in, and the amazing staff hook me up with the latest trends and styles. Their clothes are so good, I've started to think they're secretly mind-reading my fashion sense ( Spoiler alert: they're not, but it's still magic!). Seriously though, the quality, style, and service are all top-notch. If you haven't been yet, what are you even doing with your life? Get thee to [Fashion Clothing Shop] and level up your wardrobe game! ",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 3,
    name: "mainfeast",
    text: "I'm absolutely thrilled with my shopping experience at [Fashion Clothing Shop]! The staff were knowledgeable and helpful, and the quality of the clothing exceeded my expectations. I found the perfect outfit for a special occasion, and the prices were very reasonable. The shop's unique and stylish collection really stood out, and I love the attention to detail in every piece. I've already recommended [Fashion Clothing Shop] to friends and family, and I'm excited to go back and explore more of what they have to offer! ",
    img: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
  },

  {
    id: 4,
    name: "brookehil",
    text: 
"[shop me] is my go-to destination for all things fashion! Their curated collection is always on-trend and impressive, and the staff's expertise is invaluable. I've purchased several pieces from them, and the quality has always been exceptional. The shop's atmosphere is also super welcoming and stylish, making shopping a real pleasure. I've received so many compliments on the outfits I've bought from them - thanks, [Fashion Clothing Shop], for helping me upgrade my wardrobe!",
    img: "https://picsum.photos/id/237/536/354",
  },
  {
    id: 5,
    name: "saplash",
    text: "I'm obsessed with [ Shop me]! Their clothes are not only stylish and trendy, but also incredibly comfortable. The quality is top-notch, and the prices are super reasonable. I've been shopping there for years, and I've never been disappointed. The staff are always friendly and helpful, and they really know their stuff. If you're looking for a fashion fix, look no further than [Fashion Clothing Shop] - you won't regret it!",
    img: "https://picsum.photos/id/1084/536/354?grayscale",
  },
];
function Testmininols() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10 ">
      <div className="container ">
        <div className="text-current mb-10 max-w-[400px] mx-auto">
          <p data-aos=" fade-up" className="text-2xl text-blue-400  font-semibold capitalize">
            {" "}
            let your choice begin
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Testtomonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 font-sans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            numquam enim, saepe nostrum quia amet tempore, alias voluptatum
            nesciunt temporibus autem exercitationem deleniti! Odit, accusantium
            iste quasi id praesentium velit?
          </p>
        </div>
        <div data-aos="zoom-in" className="">
          <Slider   {...settings}>
            {TestmininolsData.map((data) =>(
                <div className="my-6" >
                    <div  key={data.id}  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl 
                    dark:bg-slate-600  bg-blue-500/10 relative  ">
                        <div className="mb-4">
                            <img src={data.img} alt="cover imges"  className="rounded-full w-20 h-20"/>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="space-y-3">
                                <p className="text-xs   text-gray-200  font-mono">
                                {data.text}
                                </p>
                                <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                                {data.name}</h1>
                            </div>
                        </div>
                        <p className="text-black/20 text-9xl font-serif absolute top-0  right-0"></p>
                    </div>

                </div>
            ))}
            
            
            
            
             </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testmininols;
