import React from "react";
import img3 from "../../../../public/images/gal.jpg";
import img1 from "../../../../public/images/gal1.jpeg";
import img5 from "../../../../public/images/gal2.jpeg";
import img4 from "../../../../public/images/gal4.jpeg";
import img2 from "../../../../public/images/gal5.jpeg";
import img6 from "../../../../public/images/gal6.jpeg";

const images = [img1, img2, img3, img4, img5, img6];
const Gallery = () => {
    return (
        <div className="my-12 mx-8">
            <h1 className="text-6xl text-center font-bold font-tangeri">
                Notre Galerie
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                {images.map((data) => (
                    <div>
                        <img
                            className="h-100 max-w-full rounded-lg"
                            src={data}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
