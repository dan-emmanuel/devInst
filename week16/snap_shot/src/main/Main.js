import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux'
import {setDatas} from  '../redux/action'
import { createClient } from 'pexels';
import { useEffect } from 'react';

const  Main = (props)=>{
    let { cat } = useParams();
    let { imgs } = props;


    
    useEffect(() => {
      const client = createClient('563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03');
      const query = `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`;

      client.photos.search({ query, per_page: 30  })
      .then(photos => {
        props.getDataFromApi(photos.photos)
        // props.getDataFromApi(1)

      });
      // Met à jour le titre du document via l’API du navigateur
      console.log(cat)
    });
    
    return (
        <>
            <div className=" row justify-content-center">
                <div className="col-4" > 
                    <h2 className="text-center mt-3">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
                    <div>
                      {
                        imgs.map(img=>{
                          console.log(img)
                          return (
                            <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"/>
                          )
                        })
                      }
                    </div>
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
      getDataFromApi:(e)=>dispatch(setDatas(e)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Main);
