const urls = [
  "https://www.boredapi.com/api/activity",
  "https://www.boredapis.com/api/activity",
  "https://www.boredapis2.com/api/activity"
];

Promise.all(urls.map(url =>
  fetch(url)
    .then(response => response.json())
    .then(data => ({ success: true, data, url }))
    .catch(error => ({ success: false, error, url }))
))
.then(hasil=> {
  const successHasil = hasil.filter(result => result.success);
  if (successHasil.length > 0) {
    console.log('Data:', successHasil[0].data);
    console.log('url:', successHasil[0].url);
  } else {
    console.log('No URL found.');
  }
})
.catch(error => {
  console.log('Error: fetching some data', error);
});


