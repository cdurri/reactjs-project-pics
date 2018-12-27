import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c6ae82e007b0aa434d88702c2bae5069b22869c118f3f42d619e04e2bfd63b8b'
  }
});
