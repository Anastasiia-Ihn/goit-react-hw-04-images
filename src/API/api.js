import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

//ств запиту на api
export const fetchCard = async (valueInput, page) => {
  const params = new URLSearchParams({
    key: '39154877-9df82b17a56e0efc5c16aca53',
    q: valueInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  const resp = await axios.get(`${BASE_URL}?${params}`);

  return resp;
};
