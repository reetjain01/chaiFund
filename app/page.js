import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center h-[44vh]  text-white gap-4">
        <div className=" font-bold text-5xl flex gap-3 justify-center items-center ">
          Buy Me a Chai
          <span>
            <Image src="/tea.png" alt="tea image" width={80} height={70} />
          </span>
        </div>
        <p className=" text-lg">
          A crowdfunding platform for Creators. Get funded by your fans and
          Followers. Start Now!
        </p>
        <div>
          <Link href={"/login"}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          </Link>

          <Link href={"/about"}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
      <div className=" bg-white h-1 opacity-10"></div>
      <div className=" text-white container mx-auto py-16">
        <h1 className=" text-2xl text-center mb-10  font-bold">
          Your Fans can buy you a chai
        </h1>
        <div className=" flex gap-4 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/man.png"
              alt=""
              width={80}
              height={80}
            />
            <p className=" font-bold ">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/coin.png"
              alt=""
              width={80}
              height={80}
            />
            <p className=" font-bold ">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              src="/group.png"
              alt=""
              width={80}
              height={80}
            />
            <p className=" font-bold ">Fans Wants to help</p>
            <p className=" text-center">Your fans are available for you to help</p>
          </div>
        </div>
      </div>

      <div className=" bg-white h-1 opacity-10"></div>
      <div className=" text-white container mx-auto py-16 flex justify-center items-center flex-col">
        <h1 className=" text-2xl text-center mb-10  font-bold">
          Learn More About Us
        </h1>
      
        {/* <iframe width="auto" height="[50%]" src="https://www.youtube.com/embed/QtaorVNAwbI?si=1Y3ajEA176HzYfR4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      </div>
    </>
  );
}
