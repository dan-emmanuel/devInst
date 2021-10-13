import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CardArticle from './CardArticle';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [articles, setarticles] = useState([]);

  return (
    <div className="App">
     <Header stateUpdater ={setarticles} />
     <div className="container">
        {articles.map(e=><CardArticle data={e}/>)}
     </div>
    </div>
  );
}

export default App;
