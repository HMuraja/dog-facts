import React, { useEffect, useState } from 'react'
import fetchDogData from './fetchDogData';

function DogGroups() {
    const [groups, setGroups] = useState([]);
    const getGroupData = async() => {
        const data = await fetchDogData('https://dogapi.dog/api/v2/groups')
;        setGroups([...data])
    }

    useEffect(()=>{
        getGroupData();
    },[]);


  return (
    <div>
        {groups.length !== 0 && groups.map((group) => (
            <p key={group.attributes.id}>{group.attributes.name}</p>
        )
        )}
    </div>
  )
}

export default DogGroups