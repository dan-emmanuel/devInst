const urls = [
  "https://jsonplaceholder.typicode.com/user",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

let fetcher = async (url) => {
 
    let response = await fetch(url);
    let data = await response.json();
    if(!response.ok){
      throw new Error(`oooops`);
    }else{
      return data
    }
    
  
};

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetcher(url).catch(error=>console.log(error)) )
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log(error)
  }
    
  
  
  
};

getData();
