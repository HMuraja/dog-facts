import { useState, useEffect, useRef } from 'react';
import Button from './Button';

function GroupsDropDown({grouplist, changeSelection, currentGroup}) {
    const [isHidden, setIsHidden] = useState(true);
    const dropdownRef = useRef();
    const groupMenuStyle = `p-1 border-1 rounded-3xl w-70 absolute top-10 bg-white ${isHidden && "hidden"}`

    useEffect(() => {
        //Check if element clicked is part of the dropdown
        const handleClickOutside = (event) => {
          if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
            event.target == dropdownRef.current.firstChild ? 
            setIsHidden((prev)=> !prev) : setIsHidden(false);
          } else {
            setIsHidden(true)}
        };
    
        document.addEventListener("click", handleClickOutside);
        // Cleanup function to remove event listener
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <div ref={dropdownRef}>
        <Button text='Sample breeds'/>
        <ul className={groupMenuStyle}>
        {grouplist.map((group) => (
            <li 
            className={`hover:bg-buff-c cursor-pointer rounded-xl ${group.id === currentGroup && "font-bold"}`}
            onClick={()=> changeSelection(group.id)} 
            key={group.id}>
                {group.name}
            </li>
        )
        )}
        </ul>
    </div>
  )
}

export default GroupsDropDown