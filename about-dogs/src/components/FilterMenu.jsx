import { useState, useEffect, useRef } from 'react'
import fetchDogData from './fetchDogData';

function FilterMenu({groups, onDogBreedsChange}) {
  const [isHidden, setIsHidden] = useState(true);
  const [groupChoice, setGroupChoice] = useState("");
  const dropdownRef = useRef();

  
  const btnStyle = `border-1 font-bold p-1 rounded-3xl w-70 cursor-pointer hover:bg-buff-c active:inset-shadow-sm inset-shadow-black`;
  const groupMenuStyle = `p-1 border-1 rounded-3xl w-70 absolute top-10 bg-white ${isHidden && "hidden"}`
  
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

  useEffect(() => {
    //Check if element clicked is part of the dropdown
    const handleClickOutside = (event) => {
      console.log(dropdownRef.current.firstChild)
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        event.target == dropdownRef.current.firstChild ? 
        setIsHidden((prev)=> !prev) : setIsHidden(false);
      } else {
        setIsHidden(true)}
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className='flex justify-around relative text-violet-c text-center'>

      {/* Dorpdown menu element */}
        <div ref={dropdownRef}>
          <button className={btnStyle}>Select a Group</button>
          <ul className={groupMenuStyle}>
            {groups.map((group) => (
                <li 
                className={`hover:bg-buff-c cursor-pointer rounded-xl ${group.id === groupChoice && "bg-buff-c"}`}
                onClick={()=> setGroupChoice(group.id)} 
                key={group.id}>
                    {group.name}
                </li>
            )
            )}
        </ul>
          
        </div>
        
        <button className={btnStyle} onClick={()=> getBreeds()}>Search</button>
        <button className={btnStyle} onClick={()=> getSampleBreeds()}>Get sample breeds</button>


        
    </div>
    
  )
}

export default FilterMenu