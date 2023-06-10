'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const images = [
  'prop.jpg',
  'swim.jpg',
  'ale.jpg',
  'best.jpg'
]

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
  }

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
  }

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex justify-between items-center relative">
      <div className="absolute left-8 top-[50%] z-10">
        <button className='rounded-xl bg-gray-200 px-2 py-2' onClick={goToPreviousImage}><FaArrowLeft size={28} /></button>
      </div>
      <div className="w-full h-[50vh] relative">
        <Image 
          src={`/${images[currentImage]}`}
          alt={`Carousel Image ${currentImage}`} 
          fill={true}
          className="heroImg transition duration-500 ease-in-out"
        />
      </div>
      <div className="absolute right-8 top-[50%]">
        <button className='rounded-xl bg-gray-200 px-2 py-2' onClick={goToNextImage}><FaArrowRight size={28} /></button>
      </div>
    </div>
  )
}

export default Carousel;