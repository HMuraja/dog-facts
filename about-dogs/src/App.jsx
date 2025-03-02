import { useEffect, useState } from 'react'
import Breeds from './components/Breeds';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
import fetchDogBreeds from './components/fecthDogBreeds';

function App() {
  const [dogBreeds, setdogBreeds] = useState([]);

  const breedsEndpoint = 'https://dogapi.dog/api/v2/breeds';

  useEffect(() => {
    const assignBreeds = async () => {
      const breedData = await fetchDogBreeds(breedsEndpoint); 
      if (breedData) {
        setdogBreeds([...breedData.data]);
      }
    }
    assignBreeds();
  }, []);



  return (
    <div className="p-10">
      <div className='flex py-2'>
        <FontAwesomeIcon icon={faDog} className="text-rose-c font-bold text-6xl pr-3"/>
        <h1 className="text-rose-c font-theme font-bold two text-6xl tracking-wider uppercase">Dog Facts
        </h1>
      </div>
      <hr className="text-rose-c border-4 rounded-lg text-center"/>
      
      <div>
        <h2 className="text-white font-theme font-bold text-2xl tracking-widest my-2 py-2 rounded-4xl flex justify-center bg-rose-c uppercase">The Dog Breeds</h2>
        {dogBreeds.length !== 0 && 
        <Breeds breedsObj={dogBreeds}/>}
      </div>
   </div>
  )
}

export default App
