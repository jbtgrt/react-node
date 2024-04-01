const BASE_URL = 'http://localhost:3001'; // Replace with your Node.js server URL

export async function fetchData() {
  try {
    const response = await fetch(`${BASE_URL}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it elsewhere in your app
  }
}

export async function addData(newData) {
  try {
    const response = await fetch(`${BASE_URL}/api/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
}
