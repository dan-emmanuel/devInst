import logo from './logo.svg';
import CarouselType from './Carroussel';
import './App.css';
let images = [
  {
    image:"assets/shangai.jpg",
    name:"shangai"
  },
  {
    image:"assets/macao.jpg",
    name:"macao"
  },
  {
    image:"assets/japan.jpg",
    name:"japan"
  },
  {
    image:"assets/lasVegas.jpg",
    name:"Las Vegas"
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
