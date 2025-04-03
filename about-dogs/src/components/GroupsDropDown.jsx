import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'


function GroupsDropDown({grouplist, changeSelection, currentGroup}) {
    const [isHidden, setIsHidden] = useState(true);
    const dropdownRef = useRef();
    const groupMenuStyle = `p-2 border-1 rounded absolute top-10 w-fit  bg-white ${isHidden && "hidden"}`

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

    const downIcon = () => {
      return (
        <>
          {isHidden ? 
          <FontAwesomeIcon className='me-2' icon={faChevronDown} /> 
          :
          <FontAwesomeIcon className='me-2' icon={faChevronUp} /> 
          }
          Choose A Group 
        </>
        )
    }
            

  return (
    <div ref={dropdownRef} className='text-start w-fit md:w-70'>
        <p className='p-1 bg-white cursor-pointer hover:bg-stone-100 active:inset-shadow-sm inset-shadow-black border-2 rounded-l-lg'>
          {currentGroup.name == "" ? downIcon() : currentGroup.name}
        </p>
        <ul className={groupMenuStyle}>
        {grouplist.map((group) => (
            <li 
            className={`hover:bg-stone-100 cursor-pointer rounded-xl ${group.id === currentGroup.id && "font-bold"}`}
            onClick={()=> changeSelection({name: group.name, id: group.id})} 
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