// fetch API function
export const fetcher = (url) => fetch(url).then((res) => res.json());
export const API_BASE = "http://localhost:3000/api/tracks";

// Capitialise function
export const capitaliseWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

// to handle error serializing error DATE object
export const serializeErrorFunc = (data) => JSON.parse(JSON.stringify(data));  