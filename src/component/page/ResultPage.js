'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import { usePsyStore } from "@/app/store/store";
import Image from "next/image";
import result1 from '@/../public/3.result/mooshroom.png';
import result2 from '@/../public/3.result/irongolem.png';
import result3 from '@/../public/3.result/polarbear.png';
import result4 from '@/../public/3.result/pufferfish.png';
import result5 from '@/../public/3.result/wither.png';

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state);

  const playAgain = function(){
    window.location.reload();
    const audio = new Audio('/sounds/click.mp3');
    audio.play();
  }

  return (
    <>
      <MobileFrame>
        <div className=" flex flex-col items-center justify-center text-center m-4 p-4 gap-8">
          <h1 className="text-3xl font-bold ">
            
            你的靈魂動物是──<br />
            {
              psyState.score < 6 &&
              <span className="text-red-700">哞菇</span>
            }
            {
              (psyState.score >= 6 && psyState.score < 9) &&
              <span className="text-stone-400">鐵魔像</span>
            }
            {
              (psyState.score >= 9 && psyState.score < 12) &&
              <span className="text-stone-400">北極熊</span>
            }
            {
              (psyState.score >= 12 && psyState.score < 14) &&
              <span className="text-yellow-600">河豚</span>
            }
            {
              psyState.score >= 14  &&
              <span className="text-gray-700">凋零</span>
            }
            
            </h1>          
          {
            psyState.score < 6 &&
            <>
                <Image src={result1} alt='result1'/>
                <h3>
                  你可能是隻哞菇，<br />
                  只想過上與世無爭的日子，<br />
                  負責漂亮就好！
                </h3>
            </>
            
          }

          {
            (psyState.score >= 6 && psyState.score < 9) &&
            <>
              <Image src={result2} alt='result2' />
              <h3>
                鐵魔像！<br />
                強大背後的原因，<br />
                是為了庇蔭你的村莊。
              </h3>
          </>            
          }

{
            (psyState.score >= 9 && psyState.score < 12) &&
            <>
              <Image src={result3} alt='result3' />
              <h3>
                看似可愛無害，<br />
                但狠起來也是挺狠的，<br />
                所以勸你不要惹我！
              </h3>
          </>            
          }

          {
            (psyState.score >= 12 && psyState.score < 14) &&
            <>
              <Image src={result4} alt='result4' />
              <h3>
                獨善其身的瘋子。
              </h3>
          </>       
          }

          {
            psyState.score >= 14  &&
            <>
              <Image src={result5} alt='result5' />
              <h3>
                藝術...就是爆炸！<br />
                我生來的使命，<br />
                就是製造混亂，<br />
                哈哈哈哈哈！
              </h3>
          </>       
          }
           <div 
          className={` bg-[#B65A0F] w-full rounded-full text-white 
          py-[16px] text-sm flex justify-center items-center font-medium 
          shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
                    
          onClick={playAgain}
          >再玩一次
           </div>


           </div>


        

      </MobileFrame>
    </>
    
  );
}