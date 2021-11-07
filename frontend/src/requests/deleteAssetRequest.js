
const deleteAssets = async (jwt,id/*,onFinish,onFinishFailed */) => {
  console.log(jwt,id)
    const rawResponse = await fetch('http://127.0.0.1:3001/api/1.0/userAssets', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': jwt
      },
      body: JSON.stringify({id: id})
    });
    const content = await rawResponse.text();

    return content;
}

export default deleteAssets;