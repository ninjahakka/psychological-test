"use client"

import { useEffect, useState } from "react";


export default function TODO() {

    const [count, setCount] = useState(0);

    const addCount = function() {
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("Count 改變:" + count);
        return () =>{
            console.log("un-mounted");
        }
    }, [count]);

  return (
    <>
    <div>TODO</div>
    <div onClick={addCount}>點擊次數： {count}</div>
    </>
      );
}
