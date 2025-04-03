import { useEffect, useState } from 'react'
import BreedList from './components/BreedList';
import './App.css'
import {fetchDogData} from './components/utils';
import DogFacts from './components/DogFacts';
import FilterMenu from './components/FilterMenu';
import Footer from './components/Footer';
import logo from './assets/dog-facts-logo.png';


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
    <div className="p-0 h-full text-xs font-read md:text-base flex flex-col">
      <div className="p-10">
        <div className='flex justify-center py-2'>
          <img src={logo}  alt="About dogs logo" className='max-w-100'/>
        </div>
        <div className="my-4">
          <DogFacts/>
          <h2 className="text-stone-950 font-theme text-lg font-semibold uppercase text-center">List Breeds</h2>
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
      <Footer/>

      
   </div>
  )
}

export default App
