export const fetchDogData = async (endPoint) => {
    try{
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch! Error code ${response.status}`);
      }
      const parsedData = await response.json();
      return parsedData; 

    } catch (error) {
      console.error(error);
    }
  }

export  const fetchABreed = async (id) => {
    const dataFetch = await fetchDogData(`https://dogapi.dog/api/v2/breeds/${id}`);
    return dataFetch.data;
  }

