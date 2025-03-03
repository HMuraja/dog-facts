import { useEffect, useState } from 'react'
import Breeds from './components/Breeds';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
import fetchDogData from './components/fetchDogData';
import DogFacts from './components/DogFacts';

function App() {
  const [dogBreeds, setdogBreeds] = useState([]);

  const breedsEndpoint = 'https://dogapi.dog/api/v2/breeds';

  useEffect(() => {
    const assignBreeds = async () => {
      const breedData = await fetchDogData(breedsEndpoint); 
      setdogBreeds([...breedData]);
    }
    assignBreeds();
  }, []);



  return (
    <div className="p-10">
      <div className='flex py-2'>
        <FontAwesomeIcon icon={faDog} className="text-rose-c font-bold text-6xl pr-3"/>
        <h1 className="text-rose-c font-theme font-bold two text-6xl tracking-wider uppercase">All About Dogs
        </h1>
      </div>
      <hr className="text-rose-c border-4 rounded-lg text-center"/>
      
      <div>
        <DogFacts/>

        {dogBreeds.length !== 0 && 
        <Breeds breedsObj={dogBreeds}/>}
      </div>
   </div>
  )
}

export default App
