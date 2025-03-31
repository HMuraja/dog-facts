import BreedName from './BreedName'
import PageButtons from './PageButtons';
import {fetchDogData} from './utils';
import { useState } from "react";
import DogBreed from "./DogBreed"

function BreedList({breedsObj, setBreeds, group}) {
    const [clickedBreedData, setClickedBreedData] = useState({});

    const changePage = async (url) => {
        const breedData = await fetchDogData(url);
        setBreeds({...breedData})
    }

    const breedsList = breedsObj.data
    const mapBreeds = () => {
        return breedsList.map((breed, index) => {
            return <BreedName breedData={breed} showBreed={setClickedBreedData} key={index} />
        });
    }

    const displayBreedCard = () => {
        return Object.keys(clickedBreedData).length !== 0 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-80 backdrop-blur-sm"></div>
                <DogBreed  
                    breed={clickedBreedData} 
                    closeBreedCard={setClickedBreedData} 
                    index={clickedBreedData.id}
                />
            </div>
        );
    }

  
    return (
        <div className='my-4'>
            {displayBreedCard()}
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