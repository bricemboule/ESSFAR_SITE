import React from 'react'
import Slider from "react-slick";
const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

const HomePartenaire = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };
  return (
    <>
    <br/>
    <br/>
        <div className='flex items-center justify-content-between gap-4 py-3'>
            
            <div data-aos="fade-up" data-aos-duration="300" className="py-1">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <h1 className="text-3xl font-bold">Nos partenaires academiques</h1>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                    >
                        <Slider {...settings}>
                        {testimonialData.map((data) => {
                            return (
                            <div className="my-3">
                                <div
                                key={data.id}
                                className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <img
                                        className="rounded-full block mx-auto"
                                        src={data.img}
                                        alt=""
                                    />
                                    <p className="text-gray-500 text-sm">{data.text}</p>
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                            );
                        })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className="py-1">
                    <div className="container">
                        <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <h1 className="text-3xl font-bold">Nos partenaires professionnels</h1>
                        </div>
                        <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                        >
                        <Slider {...settings}>
                            {testimonialData.map((data) => {
                            return (
                                <div className="my-3">
                                <div
                                    key={data.id}
                                    className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <img
                                    className="rounded-full block mx-auto"
                                    src={data.img}
                                    alt=""
                                    />
                                    <p className="text-gray-500 text-sm">{data.text}</p>
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                    ,,
                                    </p>
                                </div>
                                </div>
                            );
                            })}
                        </Slider>
                        </div>
                    </div>
            </div>
        </div>
        <br/>
    </>
  )
}

export default HomePartenaire