import { useState } from 'react';

export default function gif() {

  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');

  async function rand() {
    const API_KEY = '65jZnv6AH1NT4prsWeg7msk7OYuBhxHO';
    try {
      const Rand_URL = 'http://api.giphy.com/v1/gifs/random';
      const resJson = await fetch(`${Rand_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }

  async function fetchGifs() {
    const API_KEY = '65jZnv6AH1NT4prsWeg7msk7OYuBhxHO';
    try {
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }

  peticion
    .then(resp => resp.json())
    .then(({ data }) => {
      const { url } = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);
    })
    .catch(console.warn);
}
