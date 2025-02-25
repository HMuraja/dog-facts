import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import DogBreed from './components/DogBreed'
import './App.css'

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

  return (
    <>
      <div className='flex justify-center items-center '>
        
        <img src={viteLogo}  alt="Vite logo" />
      </div>
      <h1 className="text-blue-600 two text-2xl tracking-wider uppercase">Dog Facts</h1>
      <div>
        <h2>Available Dog Breeds</h2>
        <div>
          {dogBreeds.length != 0 &&
          dogBreeds.map((breed, index) => (
            <DogBreed breed={breed} key={index}/>
          ))}
        </div>
      </div>
   </>
  )
}

export default App
