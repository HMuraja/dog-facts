import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons'

function DogBreed({breed, closeBreedCard}) {

  const factsTitleTxt = `text-rose-c font-theme tracking-wider font-bold text-end`
  const factsTxt = "font-read text-sm tracking-wider my-auto"
  return (
    <div className= 'bg-white m-1 p-4 rounded-lg shadow-xl text-violet-c space-y-1 relative max-w-md w-full mx-4'>
      <div className="flex justify-end">
        <FontAwesomeIcon 
              icon={faClose} 
              onClick={()=>closeBreedCard({})} 
              className="cursor-pointer text-rose-c font-bold text-2xl"
          />
      </div>
        <h2 className='text-center text-rose-c text-2xl font-theme font-bold tracking-wider'>{breed.name}</h2>
        <div className="grid grid-cols-2 gap-y-1 gap-x-2 border-y-3 py-1">
          <h3 className={factsTitleTxt}>Avergae Life Span:</h3>
          <p className={factsTxt}>{breed.life.max}-{breed.life.min} years</p>
          <h3 className={factsTitleTxt}>Size:</h3>
          <div className="grid grid-cols-1">
            <p className={factsTxt}> female {breed.female_weight.min}-{breed.female_weight.max} kg</p>
            <p className={factsTxt}> male {breed.male_weight.min}-{breed.male_weight.max} kg</p>
          </div>
          <h3 className={factsTitleTxt}>Hypoallergenic:</h3>
          <p className={factsTxt}>{breed.hypoallergenic ? 'Yes' : 'No'}</p>
        </div>
        <p className={factsTxt}>{breed.description}</p>
    </div>
  )
}

export default DogBreed