async function fetchData() {

    const NPS_API_URL = `https://developer.nps.gov/api/v1/parks?stateCode=TX&limit=50&start=0&api_key=${NPS_API}`;
    // const NPS_API_URL = `https://developer.nps.gov/api/v1/parks?stateCode=TX&limit=50&start=0&api_key=${NPS_API}`;
    // const NPS_API_URL = `https://developer.nps.gov/api/v1/multimedia/galleries?limit=50&start=0&api_key=${NPS_API}`;


    try {
        const response = await fetch(NPS_API_URL);
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response: ', data);
    } catch (error) {
        console.error('Error: ', error);
    }


}

fetchData();

