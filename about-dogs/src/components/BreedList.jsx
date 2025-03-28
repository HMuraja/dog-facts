import BreedName from './BreedName'
import Button from './Button'

function BreedList({breedsObj}) {
    const breedsList = breedsObj.data
    const mapBreeds = () => {
        return breedsList.map((breed, index) => {
            return <BreedName breedData={breed} key={index} />
        });
    }

    return (
        <div className='my-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {mapBreeds()}
            </div>
            <div className='flex justify-around text-violet-c my-2'>
                <Button text='Previous' />
                <Button text='Next' />
            </div>
        </div>

    )
}

export default BreedList