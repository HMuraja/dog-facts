import { useState} from 'react'
import fetchDogData from './fetchDogData';
import Button from './Button';
import GroupsDropDown from './GroupsDropDown';

function FilterMenu({groups, onDogBreedsChange}) {
  const [groupChoice, setGroupChoice] = useState("");
  
  const fetchExampleBreeds = async () => {
    const dataFetch = await fetchDogData('https://dogapi.dog/api/v2/breeds'); 
    return dataFetch
  }
  
  const fetchABreed = async (id) => {
    const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/breeds/${id}`); 
    return dataFetch.attributes;
  }

  const fetchBreedIds = async() => {
      const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/groups/${groupChoice}`)
      return dataFetch.relationships.breeds.data;
  }

  const getSampleBreeds = async () => {
    setGroupChoice("")
    const breedData = await fetchExampleBreeds();      
    const prunedBreedData = breedData.map((item)=>(
      item.attributes
    ))
    onDogBreedsChange([...prunedBreedData])

  }

  const getBreeds = async() => {
    if (groupChoice == ""){
      getSampleBreeds()
    }else{
      const breedIds = await fetchBreedIds();
      const groupBreedList = await Promise.all(
        breedIds.map(async (breedId) => {
        return await fetchABreed(breedId.id)})
        )
      onDogBreedsChange([...groupBreedList]);
    }
  }

  return (
    <div className='flex justify-around relative text-violet-c text-center'>
      <GroupsDropDown 
        changeSelection ={setGroupChoice} 
        currentGroup={groupChoice}
        grouplist = {groups}
        />    

        <Button clickFunc={()=> getBreeds()} text='Search'/>
        <Button clickFunc={()=> getSampleBreeds()} text='Sample breeds'/>
 
    </div>
    
  )
}

export default FilterMenu