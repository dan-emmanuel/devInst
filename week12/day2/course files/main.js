const fetchData = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // fetch(`http://localhost:8000/login?user=${username}&pass=${password}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     document.getElementById('root').innerHTML = data.data
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

  let obj = {
    user:username,
    pass:password
  }
  fetch(`http://localhost:8000/login`,{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = data.data
    })
    .catch(err => {
      console.log(err);
    })

}
