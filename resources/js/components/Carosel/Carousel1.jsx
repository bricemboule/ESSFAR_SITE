import { useEffect, useRef, useState } from "react";
import Image1 from "../../../../public/images/accueil/Admission1.png";
import Image7 from "../../../../public/images/accueil/image5.png";
import Image8 from "../../../../public/images/accueil/image6.png";
const SliderContent = [
    {
        img: Image1,
        titre: "",
        desc: "",
    },
    {
        img: Image7,
        titre: "Ouverture internationale",
        desc: "",
    },
    {
        img: Image8,
        titre: "Excellence Académique",
        desc: "",
    },
];

const Carousel1 = () => {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(0);

    const contentRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const nameRef = useRef("");
    const suivant = () =>
        setActive((active) =>
            active === SliderContent.length - 1 ? 0 : active + 1
        );
    const Slide = (type) => {
        let local;
        if (type === "next") {
            local = active + 1;

            SliderContent.length - 1 < local ? setActive(0) : setActive(local);
        }
        if (type === "prev") {
            local = active - 1;

            local < 0 ? setActive(SliderContent.length - 1) : setActive(local);
        }
        setPrev(active);
    };

    useEffect(() => {
        setTimeout(() => {
            nameRef.current.innerText = SliderContent[active].titre;
            contentRef.current.innerText = SliderContent[active].desc;
        }, 1000);
        const slideInterval = setInterval(suivant, 4000);
        return () => clearInterval(slideInterval);
    }, [active]);

    return (
        <div className="z-[-1] relative shadow-lg overflow-hidden">
            <div className=" h-[300px] md:h-[470px]">
                {SliderContent.map((data, i) => {
                    return (
                        <img
                            src={data.img}
                            key={i}
                            alt="slideImg"
                            className={`h-[250px] md:h-[500px] w-[100%] xl:w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                                i === active ? "clip-visible" : "clip-hidden"
                            }`}
                        />
                    );
                })}
                <img
                    src={SliderContent[prev].img}
                    alt="previmg"
                    className="w-full h-full  object-cover"
                />
            </div>
            {/*<div>
                <button ref={prevRef} id="back" onClick={() => Slide("prev")}>
                    <ion-icon
                        name="chevron-back-outline"
                        size="large"
                    ></ion-icon>
                </button>
                <button
                    ref={nextRef}
                    id="forward"
                    className="right-0"
                    onClick={() => Slide("next")}
                >
                    <ion-icon
                        name="chevron-forward-outline"
                        size="large"
                    ></ion-icon>
                </button>
            </div>*/}
            <div className="content ">
                <h1 ref={nameRef} className="text-xl md:text-3xl">
                    {SliderContent[0].titre}
                </h1>
                <p ref={contentRef} className="italic text-xl md:text-2xl">
                    {SliderContent[0].desc}
                </p>
            </div>
        </div>
    );
};

export default Carousel1;
