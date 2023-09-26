async function fetchData() {

    const apiUrl = 'https://github.com/nationalparkservice/nps-api-samples';

    try {
        const response = await fetch(apiUrl);
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

