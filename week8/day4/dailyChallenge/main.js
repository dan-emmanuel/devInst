let getdata = (params) => {
  var url = new URL("https://api.giphy.com/v1/gifs/search");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return fetch(url)
    .then((e) => e.json())
    .then((result) => {
      return { params: params, data: result.data };
    });
};
let random = (arr) => arr[Math.floor(Math.random() * arr.length)];

let container = document.querySelector(`#gifToShow`);
let createAllGif = (arr) => arr.forEach((e) => container.append(createagif(e)));
let crateTheDiv = () => {
  let toReturn = Object.assign(document.createElement("div"));
  toReturn.classList.add("card")
  return toReturn
};
let genTitle = (text) => {
  console.log(text);
  return Object.assign(document.createElement("h2"), {
    textContent: `search keyword:${text}`,
  });
};
let gendeleter = (e) => {
  let toRetun =Object.assign(document.createElement("button"), {
    textContent: "delete the giff",
    onclick: (e) => (e.target.closest("div").innerHTML = ""),
 
  });
  toRetun.style.display="block"
  return toRetun
};

let createagif = ({ images: { original }, title }) =>
  Object.assign(document.createElement("img"), {
    alt: title,
    src: original.url,
  });
let addAgif = ({ params: { q }, data }) => {
  let container = document.querySelector(`#gifToShow`);
  let div = crateTheDiv();
  let title = genTitle(q);

  div.append(title);
  div.append(createagif(random(data)));
  div.append(gendeleter());

  container.append(div);
};

document.querySelector("#getACat").onsubmit = (e) => {
  e.preventDefault();
  getdata(
    (params = {
      q: e.target["cat"].value,
      rating: "g",
      api_key: "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
    })
  ).then((e) => addAgif(e));
};

document.querySelector(`#reseter`).onmousedown = (e) =>
  (container.innerHTML = "");
