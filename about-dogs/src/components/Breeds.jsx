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
    <div>
      <h2 className="text-rose-c font-theme font-bold text-2xl tracking-widest my-2 py-2 rounded-4xl flex justify-center uppercase">
          The Dog Breeds
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {mapBreeds()}
        </div>
    </div>

  )
}

export default Breeds