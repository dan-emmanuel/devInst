import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { connect } from "react-redux";
let CardArticle = (props) => {
  let { news } = props;

  return (
    <>
      <div
        className="container"
        style={
          { maxHeight: "90vh", overflowY: "scroll" }}
      >
        <div className="row justify-content-around mb-3 align-items-stretch">
          {news.map((e, index) => {
            return (
              <Col className="mb-5" key={index} sm={12} md={6} lg={4} xxl={2}>
                <Card className=" m-2 h-100">
                  <Card.Img variant="top" src={e.urlToImage} />
                  <Card.Body>
                    <Card.Title className="fs-4">
                      {e.title.substring(0, 40)}
                      {e.title.length > 40 ? (
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={<Tooltip>{e.title}</Tooltip>}
                        >
                          <a className="text-dark">...</a>
                        </OverlayTrigger>
                      ) : (
                        ""
                      )}
                    </Card.Title>

                    <p className="fs-5">
                      {e.description.substring(0, 60)}
                      {e.description.length > 60 ? (
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={<Tooltip>{e.description}</Tooltip>}
                        >
                          <a className="text-dark">...</a>
                        </OverlayTrigger>
                      ) : (
                        ""
                      )}
                    </p>
                    <blockquote className="blockquote mb-0">
                      <footer className="blockquote-footer fs-6">
                        {e.author}
                      </footer>
                    </blockquote>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href={e.url} target="_blank">
                      Link to the article
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    news: state.articles,
  };
};

export default connect(mapStateToProps, null)(CardArticle);
