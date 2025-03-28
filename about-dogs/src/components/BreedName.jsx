function BreedName({breedData}) {
  return (
    <div className='text-center text-violet-c uppercase hover:font-bold hover:cursor-pointer'>
        <h2>{breedData.attributes.name}</h2>
    </div>
  )
}

export default BreedName