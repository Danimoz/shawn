import Image from "next/image";
import { FaStarHalf, FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className="mb-9">
      <div className="relative h-[50vh] w-full">
        <div className="-z-[1]">
          <Image 
            priority
            src='/mellish.jpg'
            fill={true}
            alt='homes'
          />
        </div>
        <div className="relative">
          <h2 className="font-black text-3xl text-center py-8">Meet us better</h2>
          <h2 className="font-black text-4xl text-center py-1 text-white">Our Sessions</h2>

          <div className="md:flex gap-x-6 py-6 justify-center items-center text-white">
            <div>
              <h2><span className="font-bold text-3xl flex justify-center mb-0">350</span></h2>
              <h2 className="text-xl">houses held per month</h2>
            </div>
            <div>
              <h2 className="font-bold text-3xl flex justify-center mb-0">35</h2>
              <h2 className="text-xl">experts working</h2>
            </div>
            <div>
              <h2 className="font-bold text-3xl flex justify-center mb-0">6</h2>
              <h2 className="text-xl">awards won</h2>
            </div>
            <div>
              <h2 className="font-bold text-3xl flex justify-center mb-0">100%</h2>
              <h2 className="text-xl">satisfied customers</h2>
            </div>
          </div>
        </div>        
      </div>

      <h3 className="text-center font-black text-3xl text-sky-400 mt-9">Customer Reviews</h3>

      <div className="mt-6 sm:block md:flex items-center bg-[#f6f6f6]">
        <div className="w-full">
          <p className="px-8 py-4 text-lg">
            <div className="flex justify-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
            <span className="font-bold">&quot;&quot;</span>&nbsp; This real estate property combines elegance, functionality, and a desirable location. It presents an opportunity for individuals seeking a luxurious and convenient lifestyle in a thriving community.<span className="font-bold">&quot;&quot;</span>
            <br /><br />
            <span className="text-xl italic">&nbsp;&nbsp;James Gray</span>
          </p>
        </div>
        <div className="w-full">
          <p className="px-8 py-4 text-lg">
            <div className="flex justify-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
            <span className="font-bold">&quot;&quot;</span>&nbsp;I recently had the pleasure of working with Shawn Property Group, and I must say that my experience with them was nothing short of exceptional. From start to finish, they went above and beyond to ensure my satisfaction and make the entire process smooth and stress-free.<span className="font-bold">&quot;&quot;</span>
            <br /><br />
            <span className="text-xl italic">&nbsp;&nbsp;Diana Mitchelle</span>
          </p>
        </div>
        <div className="w-full">
          <p className="px-8 py-4 text-lg">
            <div className="flex justify-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
            <span className="font-bold">&quot;&quot;</span>&nbsp;The property offers state-of-the-art amenities, including a well-equipped fitness center and a relaxing spa.<span className="font-bold">&quot;&quot;</span>
            <br /><br />
            <span className="text-xl italic">&nbsp;&nbsp;Meghan Turner</span>
          </p>
        </div>
      </div>

    </div>
  );
}