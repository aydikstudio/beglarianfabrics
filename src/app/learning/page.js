'use client';

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../GlobalRedux/Features/question/questionSlice";


export default function Home() {
  const questions = useSelector((state) => state.question.value);
  const dispatch = useDispatch();

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
     
      <div className="mt-6 grid grid-cols-4 gap-4">
        {questions.map((item) => {
          return (
            <div onClick={() => dispatch(change(item.id))} className="flex cursor-pointer justify-center relative items-center bg-white rounded-full w-[71px] h-[71px]">
       
            {item.id}
            {item.active && <img src="./assets/images/check-circle.png" className="absolute right-0 top-0"/>} 
           </div>
          )
        })}
       
       
      </div>
    </div>
  );
}
