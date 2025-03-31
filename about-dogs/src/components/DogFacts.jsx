import { useEffect, useState } from 'react';
import Button from './Button';
import {fetchDogData} from './utils'

function DogFacts() {
    const [fact, setFact] = useState("")

    const getDogFact = async () => {
        const factsObj = await fetchDogData('https://dogapi.dog/api/v2/facts');
        setFact(factsObj.data[0].attributes.body);
    }
    
    useEffect(()=>{
        getDogFact()
    },[]);

  return (
    <div className=" my-3 shadow-xl py-1 border-2 rounded-xl bg-white flex flex-col items-center">
        <p className="text-stone-950 font-theme text-lg font-semibold uppercase">A Fun fact</p>
        <div className='flex items-center justify-center h-30 w-full p-2 text-center text-stone-950'>
            {fact}
        </div>
        <Button text='New fact' clickFunc={()=>getDogFact()} />
    </div>

  )
}

export default DogFacts