const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];

  let robotsInstences =[]

  class Robot {
    constructor({id,name,email,image}) {
      this.id = id,
      this.name = name,
      this.email = email,
      this.image = image,
      robotsInstences.push(this),
      this.card = document.createElement("div"),
      this.card.className = "card mb-2 h-75",
      this.cardAvatar = document.createElement("img"),
      this.cardAvatar.className = "card-img-top rounded-circle avatar"
      this.cardAvatar.src = this.image
      this.card.append(this.cardAvatar)
      this.cardTitle = document.createElement("h5"),
      this.cardTitle.className = "card-title text-center",
      this.cardTitle.textContent = this.name,
      this.card.append(this.cardTitle)
      this.cardText = document.createElement("h5"),
      this.cardText.className = "card-text text-center fs-6 fw-lighter fst-italic",
      this.cardText.textContent = this.email,
      this.card.append(this.cardText)
      document.querySelector(`#main`).append(this.card)
    }
    show(){this.card.classList.remove("d-none")}
    hide(){this.card.classList.add("d-none")}

  }


  // <div class="card mb-2" >
	// 		<img src="https://robohash.org/7?200x200" class="card-img-top rounded-circle avatar" alt="...">
	// 		<div class="card-body">
	// 			<h5 class="card-title">Special title treatment</h5>
	// 			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

	// 		</div>
	// 	</div>


  robots.forEach(element => {
     new Robot(element);
  });
let showHide = (e)=>{
  let text = e.target.value.toUpperCase()
  robotsInstences.forEach(element => {element.name.toUpperCase().includes(text)?element.show():element.hide()});
}
document.querySelector("#searchInput").addEventListener("input",showHide)
