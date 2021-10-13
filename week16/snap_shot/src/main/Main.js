import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setDatas,setPerPage } from "../redux/action";
import { createClient } from "pexels";
import {  useEffect } from "react";

import "./main.css";

const Main = (props) => {
  let { cat } = useParams();

  let { imgs, perPage } = props;

  useEffect(() => {
    const client = createClient(
      "563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03"
    );
    const query = cat;

    client.photos.search({ query, per_page: perPage }).then((photos) => {
      props.setDataFromApi(photos.photos);
      // props.getDataFromApi(1)
    });
    // Met à jour le titre du document via l’API du navigateur
  }, [cat, perPage]);

  return (
    <>
      <div className=" row justify-content-center">
        <div className="col-4">
          <h2 className="text-center mt-3">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>
        </div>
      </div>
      <div className=" row justify-content-center">
        <div className="col-4 row justify-content-between mb-4">
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(25);
            }}
          >
            25
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(30);
            }}
          >
            30
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(35);
            }}
          >
            35
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(40);
            }}
          >
            40
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(45);
            }}
          >
            45
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(50);
            }}
          >
            50
          </button>
          <button
            className="btn-dark col-auto "
            onClick={() => {
              props.setDataPerpageAPI(55);
            }}
          >
            55
          </button>
        </div>
      </div>

      <div className=" d-flex justify-content-between flex-wrap">
        {imgs.map((img) => {
          return (
            <img
              className="m-1"
              key={img.id}
              src={img.src.medium}
              width="200px"
              height="200px"
            />
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    imgs: state.imgs,
    perPage:state.perPage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDataFromApi: (e) => dispatch(setDatas(e)),
    setDataPerpageAPI: (e) => dispatch(setPerPage(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
