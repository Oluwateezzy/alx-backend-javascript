export default function handleResponseFromAPI(promise) {
  return promise
    .then((data) => {
      console.log('Got a response from the API');
      return data;
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return error;
    });
}
