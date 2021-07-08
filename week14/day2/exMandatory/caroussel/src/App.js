import logo from './logo.svg';
import CarouselType from './Carroussel';
import './App.css';
let images = [
  {
    image:"shangai.jpg",
    name:"shangai"
  },
  {
    image:"macao.jpg",
    name:"macao"
  },
  {
    image:"japan.jpg",
    name:"japan"
  },
  {
    image:"lasVegas.jpg",
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
