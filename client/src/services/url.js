import axios from 'axios';

export async function shorten(originalURL) {
  const response = await axios.post('/api/url/shorten', { 
    url: originalURL 
  });
  console.log(response);
  return response;
}

export async function revert(shortURL) {
  const response = await axios.post('/api/url/revert', { 
    url: shortURL 
  });
  console.log(response);
  return response;
}