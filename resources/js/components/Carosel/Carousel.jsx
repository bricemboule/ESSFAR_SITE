import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Carousel = ({ children: slides, autoSlide = false }) => {
    const [curr, setCurr] = useState(0);
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    size={40}
                    className="p-1 rounded-full shadow bg-white-80 text-gray-500 hover:bg-white"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={next}
                    size={40}
                    className="p-1 rounded-full shadow bg-white-80 text-gray-500 hover:bg-white"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
