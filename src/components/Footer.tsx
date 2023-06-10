import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-900 flex justify-between">
      <div className="mx-6">
        <Image 
          src={logo}
          alt='Shawn Logo'
          height={60}
          priority={true}  
        />
      </div>

      <div className="text-white flex items-center gap-x-4 px-6 mx-6">
        <FaEnvelope size={28} color="white"/>
        <Link className="text-white text-xl" href='mailto:barrjasonjabar@gmail.com'>Email Us</Link>
      </div>
    </div>
  )
}