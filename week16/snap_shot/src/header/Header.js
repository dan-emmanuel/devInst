import {  NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {setDatas} from  '../redux/action'
import { createClient } from 'pexels';

import { connect } from "react-redux";


const  Header = (props)=>{
    let {  perPage } = props;

    let searchAtag = (e)=>{
        e.preventDefault()
        const client = createClient('563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03');
        const query = e.target["query"].value
        client.photos.search({ query, per_page: perPage  })
        .then(photos => {
            props.setDataFromApi(photos.photos)
        //     // props.getDataFromApi(1)
        });
    }




    return (
        <>
            <div className="row justify-content-center">
                <h1 className = "text-center mt-5"> SnapShot </h1>
                <div className = "col-4">
                    <Form onSubmit={searchAtag}>
                        <InputGroup  className="mb-3 ">
                            <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="query"
                            />
                            <Button type="submit" variant="outline-secondary" id="button-addon2">
                            Button
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
            <div className=" row justify-content-center">
                <div className="col-4 row justify-content-between" > 
                    <NavLink className ="btn btn-dark col-auto" to="/mountains">Mountains</NavLink>
                    <NavLink className ="btn btn-dark col-auto" to="/beaches">Beaches</NavLink>
                    <NavLink className ="btn btn-dark col-auto" to="/birds">Birds</NavLink>
                    <NavLink className ="btn btn-dark col-auto" to="/foods">Foods</NavLink>
                </div>
            </div>
            

        </>
    )
}

const mapStateToProps = (state) => {
    return {
      imgs: state.imgs,
      perPage:state.perPage
    };
  };

  const mapDispatchToProps = (dispatch)=>{
    return {
      setDataFromApi:(e)=>dispatch(setDatas(e)),
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Header)