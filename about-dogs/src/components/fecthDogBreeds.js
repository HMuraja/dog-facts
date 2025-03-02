  
  const fetchDogBreeds = async (endPoint) => {
    try{
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch! Error code ${response.status}`);
      }
      const data = await response.json();
      return data; 

    } catch (error) {
      console.error(error);
    }
  }

  export default fetchDogBreeds