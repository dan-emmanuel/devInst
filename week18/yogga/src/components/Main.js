import Card from "react-bootstrap/Card";


import { connect } from "react-redux";

let Main = (props) => {
    let {filteredPositions} = props

  return (
    <div>
      <div
        className="container"
        
      >
        <div className="mt-4 row justify-content-around mb-3 align-items-stretch">
        {filteredPositions.map(({id,sanskrit_name,english_name,img_url})=>{
            return <Card key={id}  className="mb-4"  style={{ width: "18rem" }}>
            <Card.Img   variant="top" src={img_url} />
            <Card.Body>
              <Card.Title>{sanskrit_name}</Card.Title>
              <Card.Title>{english_name}</Card.Title>
            </Card.Body>
          </Card>
        })}
         
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state)=>{
    return {
        filteredPositions: state.filteredPositions,
    };
}

export default connect(mapStateToProps, null)(Main);
