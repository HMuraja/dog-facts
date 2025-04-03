import {fetchDogData, fetchABreed} from './utils';
import Button from './Button';
import GroupsDropDown from './GroupsDropDown';

function FilterMenu({groups, onDogBreedsChange, group, changeGroup}) {
  
  
  const getSampleBreeds = async () => {
    changeGroup({name:"", id: null})
    const breedData = await fetchDogData('https://dogapi.dog/api/v2/breeds');
    onDogBreedsChange({...breedData})
  }
  
  const fetchBreedIds = async() => {
    const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/groups/${group.id}`)
    return dataFetch.data.relationships.breeds.data;
  }

  const getBreeds = async() => {
    if (group.name == ""){
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
    <div className='flex justify-around text-center text-[10px] md:text-base'>
      <Button clickFunc={()=> getSampleBreeds()} text='All Breeds'/>
      <div className='flex justify-center relative'>
        <GroupsDropDown 
          changeSelection ={changeGroup} 
          currentGroup={group}
          grouplist = {groups}
          /> 
        <Button clickFunc={()=> getBreeds()} text='Search' customStyle='rounded-r w-fit'/>
      </div>
    </div>
    
  )
}

export default FilterMenu