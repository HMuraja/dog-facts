import { useEffect, useState } from 'react'
import BreedList from './components/BreedList';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {fetchDogData} from './components/utils';
import DogFacts from './components/DogFacts';
import FilterMenu from './components/FilterMenu';

function App() {
  const [dogBreeds, setdogBreeds] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [groupChoice, setGroupChoice] = useState({name:"", id:null});

  const getGroupData = async() => {
    const fetchedData = await fetchDogData('https://dogapi.dog/api/v2/groups')
    const justData = fetchedData.data
    const prunedData = [justData.map((group) => (
       {"id": group.id, "name": group.attributes.name}
    ))]
    setGroupList(...prunedData)
  }

  useEffect(()=>{
    getGroupData()
  }, []);

  return (
    <div className="p-10 text-xs md:text-base">
      <div className='flex py-2'>
        <FontAwesomeIcon icon={faDog} className="text-rose-c font-bold text-6xl pr-3"/>
        <h1 className="text-rose-c font-theme font-bold two text-6xl tracking-wider uppercase">All About Dogs
        </h1>
      </div>
      <hr className="text-rose-c border-4 rounded-lg text-center"/>
      
      <div className="my-4">
        <DogFacts/>
        <h2 className="text-rose-c text-lg font-semibold uppercase text-center">List Breeds</h2>
        <FilterMenu 
          groups={groupList} 
          onDogBreedsChange={setdogBreeds}
          group = {groupChoice}
          changeGroup = {setGroupChoice}
      />

      {Object.keys(dogBreeds).length !== 0 && 
      <BreedList 
        breedsObj={dogBreeds} 
        setBreeds={setdogBreeds}
        group = {groupChoice}

      />}
               
      </div>
      
   </div>
  )
}

export default App
