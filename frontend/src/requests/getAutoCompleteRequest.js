const getAutoComplete = async (jwt,input) => {
    const rawResponse = await fetch(`http://127.0.0.1:3001/api/1.0/autoComplete?input=${input}`, {
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

export default getAutoComplete;