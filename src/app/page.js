'use client';

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {

  const questions = useSelector((state) => state.question.value);


  return (
    <div>
      <div className="flex justify-between">
        <div>
          <span className="text-lg">Ray Driving Theory</span>
        </div>
        <div className="flex justify-between ml-auto">
          <div className="bg-white px-1.5 py-1.5 rounded-lg ">
            <img src="./assets/images/crown.png" />

          </div>

          <div className="flex  justify-between  bg-white px-2 py-1.5 rounded-lg ml-2" >
            <div>
              <img src="./assets/images/fire.png" />
            </div>

            <span className="text-sm text-[#2C2D2E]">13</span>


          </div>
        </div>


      </div>

      <Link href="/learning">
        <div className="flex flex-col justify-between mt-2 bg-white  rounded-lg border border-[#F3F3F3] p-6">
          <div className="flex justify-between">
            <div className="flex justify-between">
              <div className="flex justify-center bg-[#FFE3DD] w-[58px] h-[58px] rounded-full">
                <img src="./assets/images/cap.png" className="w-[32px] h-[32px] my-auto" />
              </div>
              <div className="flex flex-col ml-4">
                <span className="text-xl">Learning</span>
                <span className="text-sm text-[#87898F]">Category B</span>
              </div>
            </div>

            <div className="my-auto">
              <img src="./assets/images/right.png" />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div>
            {questions.filter((item) => item.active).length} questions out of {questions.length} passed
            </div>
            <div className="mt-2 flex flex-row">
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px]" />
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px]" />
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px] opacity-10" />
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px] opacity-10" />
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px] opacity-10" />
              <div className="w-[37px] h-[6px] rounded-[5px] bg-[#52A754] mr-[3px] opacity-10" />
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-2 ">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white flex justify-start py-4 px-3 rounded-[20px] w-[160px] h-[72px]">
            <div className="flex justify-center bg-[#FF2045] bg-opacity-10 w-10 h-10 rounded-full">
              <img src="./assets/images/l-exam.png" className="z-10 my-auto" />
            </div>
            <div className="flex flex-col ml-2 text-base leading-5 my-auto">
              <div>
                DVSA1   Exam
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-start py-4 px-3 rounded-[20px] w-[160px] h-[72px]">
            <div className="flex justify-center bg-[#6B2ABC] bg-opacity-10 w-10 h-10 rounded-full">
              <img src="./assets/images/rocket-launch.png" className="z-10 my-auto" />
            </div>
            <div className="flex flex-col ml-2 text-base leading-5 my-auto">
              <div>
                Express    mode
              </div>

            </div>
          </div>

          <div className="bg-white flex justify-start py-4 px-3 rounded-[20px] w-[160px] h-[72px]">
            <div className="flex justify-center bg-[#6B2ABC] bg-opacity-10 w-10 h-10 rounded-full">
              <img src="./assets/images/tv-play.png" className="z-10 my-auto" />
            </div>
            <div className="flex flex-col ml-2 text-base leading-5 my-auto">
              <div>
                Hazard  perception
              </div>

            </div>
          </div>

          <div className="bg-white flex justify-start py-4 px-3 rounded-[20px] w-[160px] h-[72px]">
            <div className="flex justify-center bg-[#6B2ABC] bg-opacity-10 w-10 h-10 rounded-full">
              <img src="./assets/images/80.png" className="z-10 my-auto" />
            </div>
            <div className="flex flex-col ml-2 text-base leading-5 my-auto">
              <div>
                Road   signs
              </div>

            </div>
          </div>



        </div>

        <div className="mt-2 bg-white flex justify-start py-4 px-3 rounded-[20px] w-full h-[72px]">
          <div className="flex justify-center bg-[rgb(107,42,188)] bg-opacity-10 w-10 h-10 rounded-full">
            <img src="./assets/images/game-controller.png" className="z-10 my-auto" />
          </div>
          <div className="flex flex-col ml-2 text-base leading-5 my-auto">
            <div>
              Multiplayer Learning
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <div>
          <div className="flex justify-center bg-[#FF7355] w-[58px] h-[58px] rounded-full">
            <img src="./assets/images/pen.png" className="w-[32px] h-[32px] my-auto" />
          </div>
          <div className="mt-2">
            Mistakes
          </div>
        </div>

        <div>
          <div className="flex justify-center bg-[#FF7355] w-[58px] h-[58px] rounded-full">
            <img src="./assets/images/pen.png" className="w-[32px] h-[32px] my-auto" />
          </div>
          <div className="mt-2">
            Statistics
          </div>
        </div>


        <div>
          <div className="flex justify-center bg-[#FF7355] w-[58px] h-[58px] rounded-full">
            <img src="./assets/images/pen.png" className="w-[32px] h-[32px] my-auto" />
          </div>
          <div className="mt-2">
            Highway
            Code
          </div>
        </div>


        <div>
          <div className="flex justify-center bg-[#FF7355] w-[58px] h-[58px] rounded-full">
            <img src="./assets/images/pen.png" className="w-[32px] h-[32px] my-auto" />
          </div>
          <div className="mt-2">
            Favorites
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 bg-white mt-[72px] rounded-t-3xl width-[360px] height-[74px] py-4 px-6">
        <div className="text-center mx-auto">
        <div className="flex w-[40px] justify-center bg-[#FFE3DD] h-[40px] rounded-full">
          <img src="./assets/images/home.png" className=" my-auto w-[24px]" />
        </div>
        <div className="mt-2 text-xs text-[#FF7355]">
          Home
        </div>

        </div>
        <div className="text-center">
        <div className="flex justify-center  h-[40px] rounded-full">
          <img src="./assets/images/route.png" className="my-auto" />
        </div>
        <div className="mt-2 text-xs text-[#87898F]">
        Your plan
        </div>

        </div>

        <div className=" text-center ">
        <div className="flex justify-center h-[40px] rounded-full">
          <img src="./assets/images/ranking.png" className="my-auto" />
        </div>
        <div className="mt-2 text-xs text-[#87898F] ">
        Leaderboard 
        </div>

        </div>

        <div className="text-center">
        <div className="flex justify-center  h-[40px] rounded-full">
          <img src="./assets/images/property.png" className="my-auto" />
        </div>
        <div className="mt-2 text-xs text-[#87898F]">
        Profile
        </div>

        </div>
     
      </div>
      
    </div>
  );
}
