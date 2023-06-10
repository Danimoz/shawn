import Image from "next/image";

export default function Reviews() {
  return (
    <div className="mt-9 mb-9">
      <h3 className="text-center font-black text-3xl">Customer Reviews</h3>

      <div className="mt-6 flex items-center bg-[#f6f6f6]">
        <div className="w-full px-6 relative h-[50vh] hidden md:flex">
          <Image
            src='/review.jpg' 
            fill={true}
            alt='Review Img'
            className="heroImg"
          />
        </div>
        <div className="w-full">
          <p className="px-8 py-4 text-lg">
            <span className="font-bold">&quot;&quot;</span>&nbsp;I recently had the pleasure of working with Shawn Property Group, and I must say that my experience with them was nothing short of exceptional. From start to finish, they went above and beyond to ensure my satisfaction and make the entire process smooth and stress-free.<span className="font-bold">&quot;&quot;</span>
            <br /><br />
            <span className="text-xl italic">&nbsp;&nbsp;James Gray</span>
          </p>
        </div>
      </div>

    </div>
  );
}