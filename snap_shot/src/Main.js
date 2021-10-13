import React, {  useEffect,useState  } from 'react';

import {useParams} from "react-router-dom";

import { createClient } from 'pexels';

import './Main.css'



let Main = (props)=>{
    let {cat} = useParams()
    let {page} = props
    const [images, setimages] = useState([]);
    useEffect(() => {
      const client = createClient('563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03');
      const query = cat;
      client.photos.search({ query, per_page: parseInt(page) }).then(photos => {setimages(photos.photos)});
      
    },[cat,page]);
  
    
    return (
      <div>
        {
          images.map((e,i)=>{ console.log(e);return <img key={i} src={e.src.medium} />})
        }
      </div>
    )
}
export default Main
  