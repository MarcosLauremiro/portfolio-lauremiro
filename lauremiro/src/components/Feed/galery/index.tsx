import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Iimg {
  images: string[];
  className: string;
}

export const Galery = ({ images, className }: Iimg) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

  return (
    <>
      <div
        className={className}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <img key={i} src={image} alt="" />
        ))}
      </div>
        <button
          className="prev"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          className="next"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          <FaArrowCircleRight />
        </button>
    </>
  );
};
