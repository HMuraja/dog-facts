import { useState} from 'react'
import fetchDogData from './fetchDogData';
import Button from './Button';
import GroupsDropDown from './GroupsDropDown';

function FilterMenu({groups, onDogBreedsChange}) {
  const [groupChoice, setGroupChoice] = useState("");
  
  const fetchABreed = async (id) => {
    const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/breeds/${id}`);
    return dataFetch.data;
  }

  const fetchBreedIds = async() => {
      const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/groups/${groupChoice}`)
      return dataFetch.data.relationships.breeds.data;
  }

  const getSampleBreeds = async () => {
    setGroupChoice("")
    const breedData = await fetchDogData('https://dogapi.dog/api/v2/breeds');
    onDogBreedsChange({...breedData})
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
      onDogBreedsChange({data:[...groupBreedList]});
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
      <Button clickFunc={()=> getSampleBreeds()} text='All Breeds'/>
    </div>
    
  )
}

export default FilterMenu