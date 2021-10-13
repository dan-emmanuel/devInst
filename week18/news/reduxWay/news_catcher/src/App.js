import './App.css';
import Header from './Header';
import CardArticle from './CardArticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App(props) {
  // const [articles, setarticles] = useState([]);
  return (
    <div className="App">
     <Header  />
      <CardArticle/>
    </div>
  );
}


export default App;

