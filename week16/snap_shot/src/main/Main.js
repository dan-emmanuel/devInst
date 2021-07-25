import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux'
import {setDatas} from  '../redux/action'
import { createClient } from 'pexels';
import { useEffect } from 'react';
import './main.css'

const  Main = (props)=>{
    let { cat } = useParams();
    let { perPage,setPerpage } = useParams(30);

    let { imgs } = props;


    
    useEffect(() => {
      const client = createClient('563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03');
      const query = `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`;

      client.photos.search({ query, per_page: perPage  })
      .then(photos => {
        props.getDataFromApi(photos.photos)
        // props.getDataFromApi(1)

      });
      // Met à jour le titre du document via l’API du navigateur
      console.log(cat)
    },[cat,perPage]);
    
    return (
        <>
          <div className=" row justify-content-center">
            <div className="col-4" > 
                <h2 className="text-center mt-3">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
            </div>
          </div>
          <div> 
            <buton onClick = {()=>{setPerpage(25)}}>25</buton>
            <buton onClick = {()=>{setPerpage(30)}}>30</buton>
            <buton onClick = {()=>{setPerpage(35)}}>35</buton>  

          </div>
          <div className=" d-flex justify-content-between flex-wrap">
            {
              imgs.map(img=>{
                console.log(img)
                return (
                  <img className="m-1" key={img.id} src={img.src.medium} width="200px" height="200px"/>
                )
              })
            }
          </div>
        </>
    )
}
const mapStateToProps = (state)=>{
    return {
      imgs : state.imgs,
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
      getDataFromApi:(e)=>dispatch(setDatas(e)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Main);
