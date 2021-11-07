
const postAssets = async (jwt,body/*,onFinish,onFinishFailed */) => {
    const rawResponse = await fetch('http://127.0.0.1:3001/api/1.0/userAssets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': jwt
      },
      body: JSON.stringify(body)
    });
    const content = await rawResponse.text();

    return content;
}

export default postAssets;