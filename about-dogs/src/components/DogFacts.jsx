import { useEffect, useState } from 'react'
import fetchDogData from './fetchDogData';
import Button from './Button';

function DogFacts() {
    const [fact, setFact] = useState("")
    const getDogFact = async () => {
        const data = await fetchDogData('https://dogapi.dog/api/v2/facts');
        setFact(data[0].attributes.body);
    }
    
    useEffect(()=>{
        getDogFact()
    },[]);

  return (
    <div className="text-white font-theme my-3 shadow-xl py-1 rounded-xl bg-white flex flex-col items-center">
        <p className="text-rose-c text-lg font-semibold uppercase">Fun fact</p>
        <div className='flex items-center justify-center h-30 w-full p-2 text-center text-rose-c'>
            {fact}
        </div>
        <Button text='New fact' clickFunc={()=>getDogFact()} customStyle = "my-2 border-1 bg-violet-c hover:bg-white hover:text-violet-c hover:border-1"/>
    </div>

  )
}

export default DogFacts