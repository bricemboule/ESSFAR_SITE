import { useState, useRef, useEffect } from "react";
import video from "../../images/video2.mp4"
import Info from "./Info";


const Carousel = () => {
  
    return (
      <>
        <div>
          <div className="relative h-[500px]">
            <video autoPlay loop muted className="absolute right-0 top-0 h-[610px] w-full object-cover z-[-1]">
                <source src={video} type="video/mp4"/>
            </video>
            <Info/>
          </div>
        </div>
      </>
    );
}

export default Carousel