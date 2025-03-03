  
  const fetchDogData = async (endPoint) => {
    try{
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch! Error code ${response.status}`);
      }
      const parsedData = await response.json();
      return parsedData.data; 

    } catch (error) {
      console.error(error);
    }
  }

  export default fetchDogData