import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux'
import {getData} from  '../redux/action'
import { useEffect } from 'react';
import { createClient } from 'pexels';

const  Main = ()=>{
    let { cat,store } = useParams();
    useEffect(() => {
    }, [store]);

   

    const client = createClient('563492ad6f91700001000001434adaf4e0ff4cde8139429e13086a2a');
    const query = 'Nature';

    client.photos.search({ query, per_page: 1 })
    .then(photos => {
      console.log(photos)
    });

    
    return (
        <>
            <div className=" row justify-content-center">
                <div className="col-4" > 
                    <h2 className="text-center mt-3">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
                </div>
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
      getDataFromApi:(e)=>dispatch(getData(e)),

  
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Main);
