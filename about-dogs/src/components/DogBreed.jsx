

function dogBreed({breed, indx}) {
  // Color list, assigned based on the the index assigned
  const bgColorsList = ['bg-violet-c', 'bg-buff-c', 'bg-blue-c','bg-coral-c'];
  const txtColorsList = ['text-buff-c', 'text-violet-c', 'text-coral-c', 'text-blue-c'];
  const divColorsList = ['text-rose-c', 'text-rose-c', 'text-violet-c', 'text-blue-c'];
  
  const factsTitleTxt = `uppercase font-theme tracking-widerfont-bold text-sm font-bold flex justify-end pr-2 ${txtColorsList[indx]}`
  const factsTxt = "font-read text-sm tracking-wider "
  const bgChoice= `m-1 p-5 rounded-lg shadow-xl text-white ${bgColorsList[indx]}`
  const dividerStyle = `border-2 rounded-lg mb-2 ${divColorsList[indx]}`
  return (
    <div className= {bgChoice}>
        <h2 className={`flex justify-center text-2xl font-theme font-bold tracking-wider pb-1 ${txtColorsList[indx]}`}>{breed.attributes.name}</h2>
        <hr className={dividerStyle}/>
        <div className="grid grid-cols-2 gap-y-1 pb-3">
          <h3 className={factsTitleTxt}>Avergae Life Span:</h3>
          <p className={factsTxt}>{breed.attributes.life.max}-{breed.attributes.life.min} years</p>
          <h3 className={factsTitleTxt}>Size:</h3>
          <div className="grid grid-cols-1">
            <p className={factsTxt}> female {breed.attributes.female_weight.min}-{breed.attributes.female_weight.max} kg</p>
            <p className={factsTxt}> male {breed.attributes.male_weight.min}-{breed.attributes.male_weight.max} kg</p>
          </div>
          <h3 className={factsTitleTxt}>Hypoallergenic:</h3>
          <p className={factsTxt}>{breed.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
        </div>
        <hr className={dividerStyle}/>
        <p className={factsTxt}>{breed.attributes.description}</p>
    </div>
  )
}

export default dogBreed