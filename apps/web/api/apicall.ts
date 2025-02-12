export const fetchUrl = async (url: URL | RequestInfo) => {
  try {
    const response = await fetch(`https://tyradex.vercel.app/api/v1/${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
