import { FaLightbulb, FaPencilRuler } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import Image from "next/image";

export default function Philosophy() {
  return (
    <div className="mt-9">
      <div className="mt-6 sm:block md:flex items-center bg-[#f6f6f6]">
        <div className="w-full px-6 relative h-[50vh] md:flex">
          <Image
            src='/roomcom.jpg' 
            fill={true}
            alt='Review Img'
            className="heroImg"
          />
        </div>
        <div className="w-full mb-6 pb-4">
          <h2 className="px-8 py-4 text-3xl text-center my-6 font-bold">We are home to <br />some of the most recognized names<br /> in real estate.</h2>
        </div>
      </div>
      <div className="px-8 mt-6 mb-4">
        <h4 className="text-3xl font-black text-center mb-4 text-sky-400">Our Philosophy</h4>
        <p className="text-center mb-6">
          Shawn Property Group takes pride in its distinctive approach. We foster close collaboration with our clients, leaving no room for any question, concern, or desire to go unnoticed or unaddressed.
          <br /><br />
          Our dedicated team of professionals understands the significance of effective communication and active engagement. We actively listen to your needs, preferences, and aspirations, striving to incorporate them into every step of the process. Whether it&apos;s finding the perfect property, navigating through legal procedures, or addressing any post-purchase queries, we are here to provide unwavering support and guidance.
          <br /><br />
          By choosing Shawn Property Group, you embark on a journey where your vision becomes our mission. We go above and beyond to transform your dreams into a tangible reality. With our distinctive approach and unwavering dedication, we are committed to delivering exceptional results and creating a lasting relationship based on trust and satisfaction.
        </p>
      </div>
      <div className="md:flex gap-x-4 px-8 mt-8">
        <div className="mb-3">
          <div className="flex justify-center text-sky-400 animate-spin"><FaLightbulb size={42} /></div>
          <h4 className="text-center font-bold text-xl mb-1">Idea</h4>
          <p className="text-center">Our mission is to transform ideas into reality. With unwavering dedication, we strive to fully embrace and actualize your vision.</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-center text-sky-500"><FaPencilRuler size={42} /></div>
          <h4 className="text-center font-bold text-xl mb-1">Design</h4>
          <p className="text-center">Throughout the entire journey, Shawn Property Group accompanies you at every phase of the design process, ensuring a comprehensive and seamless experience.</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-center text-sky-600 animate-bounce"><TbTargetArrow size={42}/></div>
          <h4 className="text-center font-bold text-xl mb-1">Satisfaction</h4>
          <p className="text-center">Your input and contentment hold utmost significance at every stage of the process, from the inception of the initial concept to the final stroke.</p>
        </div>
      </div>

      <h3 className="text-center mt-8 font-black text-3xl mx-8 text-sky-400">Why You&apos;ll Love Us</h3>
      <div className="mt-6 sm:block md:flex items-center bg-[#f6f6f6]">
        <div className="w-full px-6 relative h-[50vh] md:flex">
          <Image
            src='/ale.jpg' 
            fill={true}
            alt='Review Img'
            className="heroImg"
          />
        </div>
        <div className="w-full mb-6 pb-4">
          <h2 className="px-8 py-2 text-xl text-center my-3">We support our affiliates with a host of operational, marketing, recruiting, educational and business development resources.</h2>
          <h3 className="px-8 text-xl mx-6 mb-3">We are:</h3>
          <ul className="px-8 mx-8 text-xl list-disc">
            <li className="mb-2 font-bold">Elegant</li>
            <li className="mb-2 font-bold">Ethical</li>
            <li className="mb-2 font-bold">Sustainable</li>
            <li className="mb-2 font-bold">Perfection</li>
            <li className="mb-2 font-bold">Seasonal</li>
          </ul>
        </div>
      </div>

    </div>
  );
}