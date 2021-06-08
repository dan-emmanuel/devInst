const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]


Promise.all( urls.map(e=>fetch(e))).then(responses => responses.forEach((response,index) => console.log(index,response)));

const url2 = [
  'https://swapi.dev/api/people/34',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]

Promise.all( url2.map(e=>fetch(e)))
.then(responses => responses.forEach((response,index) => console.error(index,response)))
.catch(e=>{error.log(e)});
