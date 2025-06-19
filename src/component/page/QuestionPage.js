'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import q1Up from '@/../public/1.question/croissant-q1-up.png';
import q1Down from '@/../public/1.question/croissant-q1-down.png';
import blurCircle1 from '@/../public/1.question/blurCircle-2.png';
import blurCircle2 from '@/../public/1.question/blurCircle-3.png';
import blurCircle3 from '@/../public/1.question/blurCircle-4.png';
import { usePsyStore, useQuestionStore } from "@/app/store/store";


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state) => state);
  const psyData = usePsyStore( (state) => state);


  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
    
  }

  const getMainColor = function(prefix){
    let colorString = "";
    if(questionIndex == 0){
      colorString = prefix+ "-[#90B62A]";
    }
    if(questionIndex == 1){
      colorString = prefix+ "-[#DD3E3E]";
    }else{
      colorString = prefix+ "-[#1098EC]";
    }
    return colorString;
  }

  return (
    <>
      <MobileFrame>
        {
          questionIndex == 0 &&
        <Image className="absolute top-0 -translate-y-1/2" src={blurCircle1} alt='circleImg' />
        }
        {
          questionIndex == 1 &&
        <Image className="absolute top-0 -translate-y-1/2" src={blurCircle2} alt='circleImg' />
        }
        {
          questionIndex == 2 &&
        <Image className="absolute top-0 -translate-y-1/2" src={blurCircle3} alt='circleImg' />
        }

        <div className=" flex flex-col items-center gap-[26px]">
          <Image src={q1Up} className="w-[88px]" alt='q1Up'/>

          <div className="text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px] 
          flex justify-center items-center font-bold text-xl ">
            Q{questionIndex+1}
          </div>
          <div className={`text-center font-bold text-3xl [${getMainColor('text')}] mb-[20px]`}
          >{questionData.questions[questionIndex+1].title}</div>



{
            
            questionData.questions[questionIndex+1].options.map( (option, index) => {

              return (
                <>
                {
                  questionIndex == 0 &&
                  <div 
                    className={` bg-[url('/1.question/grass.jpg')] w-full h-14 rounded-full text-white 
                      py-[16px] text-sm flex justify-center items-center font-medium 
                      shadow-[0px_4px_0px_1px_#966C4A] cursor-pointer hover:translate-y-0.5 transition`}
                    
                    onClick={() => clickAnswer(option)}
                    key ={option.title + "green"}
                  > {option.title} </div>
                }

{
                  questionIndex == 1 &&
                  <div 
                    className={` bg-[url('/1.question/stone.jpg')] w-full h-14 rounded-full text-white 
                      py-[16px] text-sm flex justify-center items-center font-medium 
                      shadow-[0px_4px_0px_1px_#656565] cursor-pointer hover:translate-y-0.5 transition text-center`}
                    
                    onClick={() => clickAnswer(option)}
                    key ={option.title + "red"}
                  > {option.title} </div>
                }

{
                  questionIndex == 2 &&
                  <div 
                    className={` bg-[url('/1.question/plank.jpg')] w-full h-14 rounded-full text-white 
                      py-[16px] text-sm flex justify-center items-center font-medium 
                      shadow-[0px_4px_0px_1px_#755C33] cursor-pointer hover:translate-y-0.5 transition`}
                    
                    onClick={() => clickAnswer(option)}
                    key ={option.title + "blue"}
                  > {option.title} </div>
                }

{
                  questionIndex == 3 &&
                  <div 
                    className={` bg-[url('/1.question/stonebrick.jpg')] w-full h-14 rounded-full text-white 
                      py-[16px] text-sm flex justify-center items-center font-medium 
                      shadow-[0px_4px_0px_1px_#656565] cursor-pointer hover:translate-y-0.5 transition`}
                    
                    onClick={() => clickAnswer(option)}
                    key ={option.title + "purple"}
                  > {option.title} </div>
                }

{
                  questionIndex == 4 &&
                  <div 
                    className={` bg-[url('/1.question/dirt.jpg')] w-full h-14 rounded-full text-white 
                      py-[16px] text-sm flex justify-center items-center font-medium 
                      shadow-[0px_4px_0px_1px_#593D29] cursor-pointer hover:translate-y-0.5 transition text-center`}
                    
                    onClick={() => clickAnswer(option)}
                    key ={option.title + "black"}
                  > {option.title} </div>
                }
                </>
              )

            })

          }

          <Image src={q1Down} className="w-[88px]" alt='q1Down'/>

          {
            questionIndex == 0 &&
          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={blurCircle1} alt='circleImg' />
          }
          {
            questionIndex == 1 &&
          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={blurCircle2} alt='circleImg' />
          }
          {
            questionIndex == 2 &&
          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none" src={blurCircle3} alt='circleImg' />
          }


        </div>

        
      </MobileFrame>

    </>
    
  );
}