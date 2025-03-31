

function BreedName({breedData, showBreed}) {
  const breedName = breedData.attributes.name

  return (
    <div onClick={()=>showBreed({...breedData.attributes})}className='text-center text-violet-c uppercase hover:font-bold hover:cursor-pointer'>
        <h2>{breedName}</h2>
    </div>
  )
}

export default BreedName