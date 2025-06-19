'use client';

export default function CalenderPage({year, month, day, weekDay}) {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        alert("你選的是： " + dateString);
      };      

  return (
    <>

        <div className='relative bg-stone-100 text-indigo-800 font-extrabold w-[320px] h-[480px] rounded-2xl flex 
        justify-center items-center flex-col'>
        <div className='absolute top-4 left-4'> {year} </div>
        <div className='absolute top-4 right-4'> {month}月 </div>
        <div className='text-[240px]'> {day} </div>
        <div className='text-[60px]'> {weekDay} </div>
        </div>
        
    </>
    
  );
}