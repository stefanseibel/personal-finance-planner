
const login = async (body/*,onFinish,onFinishFailed */) => {
    const rawResponse = await fetch('http://127.0.0.1:3001/api/1.0/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const content = await rawResponse.json();

    return content;
}

export default login;