import Image from "next/image";
import Link from "next/link";
const Secure = () => {
  return (
    <div className="mt-9">
      <div className="mt-6 sm:block md:flex items-center bg-[#f6f6f6]">
        <div className="w-full">
          <h1 className="px-8 py-4 mb-6 font-black text-5xl">ALL YOUR ASSETS ARE SECURED</h1>
          <p className="px-8 py-4 mb-6">OUR GOAL IS TO PROVIDE YOU WITH THE BEST POSSIBLE REAL ESTATE EXPERIENCE AND RESULTS THAT MATCH</p>
          <Link href='#contact' className="px-8">
            <button className="rounded-lg bg-transparent p-4 mb-2 border-2 text-lg border-1 ">GET IN TOUCH</button>
          </Link>
        </div>

        <div className="w-full px-6 relative h-[50vh] flex">
          <Image
            src='/pixhome.jpg' 
            fill={true}
            alt='Review Img'
            className="heroImg"
          />
        </div>
      </div>
    </div>
  )
}

export default Secure;