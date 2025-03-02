import React from 'react'
import DogBreed from './DogBreed'

function Breeds({breedsObj}) {

  const mapBreeds = () => {
      let colorIndex = 0;
      return breedsObj.map((breed, index) => {
        colorIndex == 3 ? colorIndex=0 : colorIndex++;
        return <DogBreed breed={breed} key={index} indx={colorIndex}/>
      });
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {mapBreeds()}
    </div>
  )
}

export default Breeds