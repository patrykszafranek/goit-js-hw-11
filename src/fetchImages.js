import axios from 'axios';

export async function fetchImages(searching, page) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=15898685-89bff7612e9c08763771f3be3&q=${searching}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    });
    return response.data;
  } catch (error) {
    console.log(`error: `, error);
  }
}
