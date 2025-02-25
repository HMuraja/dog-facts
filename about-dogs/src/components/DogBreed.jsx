function dogBreed({breed}) {
  return (
    <div>
        <h2 className="my-5">{breed.attributes.name}</h2>
        <p>{breed.attributes.description}</p>
    </div>
  )
}

export default dogBreed