import BreedName from './BreedName'
import PageButtons from './PageButtons';
import {fetchDogData} from './utils';

function BreedList({breedsObj, setBreeds, group}) {
    console.log(group)

    const changePage = async (url) => {
        const breedData = await fetchDogData(url);
        setBreeds({...breedData})
    }

    const breedsList = breedsObj.data
    const mapBreeds = () => {
        return breedsList.map((breed, index) => {
            return <BreedName breedData={breed} key={index} />
        });
    }

    return (
        <div className='my-4'>
            <div className='flex justify-center text-white my-2 py-2 gap-4 bg-rose-c rounded-2xl'>
                {Object.keys(breedsObj).length !== 1 ?
                <PageButtons 
                    updatePage = {changePage} 
                    breedPages={breedsObj.meta.pagination} 
                    breedLinks={breedsObj.links}
                />
                :
                <p className=" text-center">{group.name} <br /> Records: {Object.keys(breedsObj.data).length}</p>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {mapBreeds()}
            </div>
        </div>

    )
}

export default BreedList