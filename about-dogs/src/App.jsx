import { useEffect, useState } from 'react'
import DogBreed from './components/DogBreed'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [dogBreeds, setdogBreeds] = useState([]);
  

  const breedsEndpoint = 'https://dogapi.dog/api/v2/breeds';

  const fetchDogBreeds = async (endPoint) => {
    try{
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch! Error code ${response.status}`);
      }
      const data = await response.json();
      return data; 

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const assignBreeds = async () => {
      const breedData = await fetchDogBreeds(breedsEndpoint); 
      if (breedData) {
        setdogBreeds([...breedData.data]);
      }
    }
    assignBreeds();
  }, []);

  const mapBreeds = () => {
      let colorIndex = 0;
      return dogBreeds.map((breed, index) => {
        colorIndex == 3 ? colorIndex=0 : colorIndex++;
        return <DogBreed breed={breed} key={index} indx={colorIndex}/>
      });
  }

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {dogBreeds.length !== 0 && mapBreeds()}
        </div>
      </div>
   </div>
  )
}

export default App
