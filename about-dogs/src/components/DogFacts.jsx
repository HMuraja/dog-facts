import React, { useEffect, useState } from 'react'
import fetchDogData from './fetchDogData';

function DogFacts() {
    const [fact, setFact] = useState("")
    const btnStyle = (
        `text-white font-bold p-1 rounded-4xl bg-violet-c w-40 text-center my-2 cursor-pointer
            hover:bg-blue-c
            active:inset-shadow-sm inset-shadow-black
        `
    );

    const getDogFact = async () => {
        const data = await fetchDogData('https://dogapi.dog/api/v2/facts');
        setFact(data[0].attributes.body);
    }
    
    useEffect(()=>{
        getDogFact()
    },[]);

  return (
    <div className="text-white font-theme my-2 shadow-xl py-1 rounded-xl bg-white flex flex-col items-center">
        <p className="text-rose-c text-lg font-semibold uppercase">Fun fact</p>
        <div className='flex items-center justify-center h-30 w-full p-2 text-center text-rose-c'>
            "{fact}"
        </div>
        <button className={btnStyle} onClick={()=>getDogFact()}>New Fact</button>
    </div>

  )
}

export default DogFacts