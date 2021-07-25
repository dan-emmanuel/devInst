import {  NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const  Header = ()=>{

    // searchAtag = ()=>{
    //     const client = createClient('563492ad6f917000010000014e81efe1d3f74ae4bd5a92d1148b5e03');
    //     const query = `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`;

    //     client.photos.search({ query, per_page: perPage  })
    //     .then(photos => {
    //     props.getDataFromApi(photos.photos)
    //     // props.getDataFromApi(1)

    //   });
    // }




    return (
        <>
            <div className="row justify-content-center">
                <h1 className = "text-center mt-5"> SnapShot </h1>
                <div className = "col-4">
                    <InputGroup className="mb-3 ">
                        <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Button
                        </Button>
                    </InputGroup>
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

export default Header