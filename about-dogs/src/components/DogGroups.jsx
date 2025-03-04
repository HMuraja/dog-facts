import { useEffect, useState } from 'react'
import fetchDogData from './fetchDogData';

function DogGroups({onValueChange, selectedId, onBreedsValueChange}) {
    const [groups, setGroups] = useState([]);
    const [isHidden, setIsHidden] = useState(true);
    const [groupBreedIds, setGroupBreedIds] = useState([]);
    

    const btnStyle = `border-1 font-bold p-1 rounded-3xl w-70 cursor-pointer hover:bg-buff-c active:inset-shadow-sm inset-shadow-black`;
    const groupMenuStyle = `p-1 border-1 rounded-3xl w-70 absolute top-10 bg-white ${isHidden && "hidden"}`
  
    const getBreeds = async () => {
      const breedData = await fetchDogData('https://dogapi.dog/api/v2/breeds'); 
      onBreedsValueChange([...breedData]);
    }

    const getGroupData = async() => {
        const data = await fetchDogData('https://dogapi.dog/api/v2/groups')       
        setGroups([...data])
    }

    const getDogGroupData = async() => {
        const groupObj = await fetchDogData(`https://dogapi.dog/api/v2/groups/${selectedId}`)
        console.log(groupObj)       
        setGroupBreedIds([...groupObj.relationships.breeds.data]);
    }

    console.log(groupBreedIds)


    useEffect(()=>{
        getGroupData();
    },[]);


  return (
    <div className='flex justify-around relative text-violet-c text-center'>
        <button className={btnStyle} onClick={()=> getBreeds()}>Get sample breeds</button>
        <button className={btnStyle} onClick={()=> setIsHidden((prev) => !prev)}>Select a Group</button>
        <button className={btnStyle} onClick={()=> getDogGroupData()}>Search</button>
        <ul className={groupMenuStyle}>
            {groups.map((group) => (
                <li 
                className={`hover:bg-buff-c cursor-pointer rounded-xl ${group.id === selectedId && "bg-buff-c"}`}
                onClick={()=> onValueChange(group.id)} 
                key={group.id}>
                    {group.attributes.name}
                </li>
            )
            )}
        </ul>
        
    </div>
    
  )
}

export default DogGroups