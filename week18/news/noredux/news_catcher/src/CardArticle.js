import { getAllByDisplayValue } from "@testing-library/react";
import Card from "react-bootstrap/Card";

let CardArticle = (props) => {
  let {data} = props
  return (
    <div className="row justify-content-center mt-3">
      <Card className="col-5">
      <Card.Img variant="top" src={data.urlToImage} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
         
          <Card.Text>
            
            <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {data.description}{' '}
            </p>
            <footer className="blockquote-footer">
              {data.author}
            </footer>
          </blockquote>
          </Card.Text>
          <Card.Link href={data.url} target="_blank">Link to the article</Card.Link>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardArticle;
