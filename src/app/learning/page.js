import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href={"/"}>
     <div className="flex justify-start">
      <div>
      <img src="./assets/images/arrow-left.png" />
      </div>
        <div className="ml-4 ">
          <span className="text-lg">Learning</span>
        </div>
       
      </div>
      </Link>

      <div className="pb-[14px] mx-auto mt-[14px] text-center text-[14px] text-[#FF7355] border-[#FF7355] border-b-2 w-[109px]">
          Tests
      </div>

      
    </div>
  );
}
