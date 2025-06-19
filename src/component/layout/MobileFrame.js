'use client';

export default function MobileFrame({children}) {


  return (
    <>
      <div className="w-[33%] min-w-[380px] max-w-[420px] h-[85%] bg-white rounded-2xl flex justify-center items-center p-[52px] relative overflow-hidden">
          {children}
        </div>
    </>
    
  );
}