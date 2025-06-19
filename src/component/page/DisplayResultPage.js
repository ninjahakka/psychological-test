'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import next from "next";


export default function DisplayResultPage({nextStep}) {

  const handleClick = () => {
    nextStep();
    const audio = new Audio('/sounds/levelup.mp3');
    audio.play();
  };

  return (
    <>
    <MobileFrame>
      <div>
        <div>
          顯示我的靈魂動物
        </div>

        <div 
            className={` bg-[url('/1.question/grass.png')] w-full rounded-full text-white 
            py-[16px] text-sm flex justify-center items-center font-medium 
            shadow-[0px_4px_0px_1px_#593D29] cursor-pointer hover:translate-y-0.5 transition`}
                      
            onClick={handleClick}

            >查看結果</div>
      </div>
      
    
    </MobileFrame>
    </>
    
  );
}