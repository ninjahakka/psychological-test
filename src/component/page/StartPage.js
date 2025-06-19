'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import blurCircle from '@/../public/0.start/blurCircle-1.png';
import result1 from '@/../public/3.result/mooshroom.png';
import result2 from '@/../public/3.result/irongolem.png';
import result3 from '@/../public/3.result/polarbear.png';
import result4 from '@/../public/3.result/pufferfish.png';
import result5 from '@/../public/3.result/wither.png';

export default function StartPage({nextStep}) {


  return (
    <>
      <MobileFrame>
        <div className="flex items-center justify-center flex-col gap-[50px]">
          {/* <Image className="absolute top-0 -translate-y-1/2" src={blurCircle} alt='circleImg' /> */}
          {/* <Image src={titleImg} alt='title'/> */}
          <div className="flex flex-row gap-1">
          <Image src={result1} alt='title'/>
          <Image src={result2} alt='title'/>
          <Image src={result3} alt='title'/>
          <Image src={result4} alt='title'/>
          <Image src={result5} alt='title'/>
          </div>
          <div className="text-[#B95f0f] font-bold text-center text-[14px] leading-6 tracking-wide">
            <h1 className={`text-3xl mb-[20px] leading-11`}>
              你的麥塊靈魂動物<br />
              是什麼？
            </h1>
          你有沒有想過，<br />
          你的靈魂動物是什麼？<br />
          (：沒有欸)<br />
          (無視)那你一定要測驗一下，<br />
          窺探你內心的深處，<br />
          到底長個什麼樣吧！
          </div>
          {/* <Image className="w-[160px] cursor-pointer hover:translate-y-0.5 transition" onClick={nextStep} src={startBtn} alt='startBtn'></Image> */}
          {/* <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={blurCircle} alt='circleImg' /> */}

          
          <div 
            className={` bg-[url('/1.question/grass.png')] w-30 rounded-full text-white 
            py-[16px] text-sm flex justify-center items-center font-medium 
            shadow-[0px_4px_0px_1px_#593D29] cursor-pointer hover:translate-y-0.5 transition`}
                      
            onClick={nextStep}

            >START</div>
        </div>
      </MobileFrame>
    </>
    
  );
}