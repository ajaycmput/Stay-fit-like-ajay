/* The function fetchData fetches the Excercies API data,
   it takes in the url and options(optional) arguments,
   By using the universal windows.fetch() method, it gets
   the response and data returns the response in json format */

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
};