import logo from './logo.svg';
import CarouselType from './Carroussel';
import './App.css';
let images = [
  {
    image:"hongkong.jpg",
    name:"hongkong"
  },
  {
    image:"lighthouse.jpg",
    name:"lighthouse"
  },
  {
    image:"paris.jpg",
    name:"paris"
  },
  {
    image:"shangai.jpg",
    name:"shangai"
  }
]
function App() {
  return (
    <div className="App">
      <CarouselType assets={images}/>
    </div>
  );
}

export default App;
