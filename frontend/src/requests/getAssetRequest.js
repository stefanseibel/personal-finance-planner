const getAssets = async (jwt) => {
    const rawResponse = await fetch('http://127.0.0.1:3001/api/1.0/userAssets', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': jwt
      }
    });
    const content = await rawResponse.json();
    
    return content;
}

export default getAssets;