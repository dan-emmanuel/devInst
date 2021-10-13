import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetcher, chanegFiletred } from "../redux/action";

let Header = (props) => {
  let { fetch, positions, filter, filteredPositions } = props;
  const [curent, setcurent] = useState("all");

  useEffect(() => {
    fetch();
  }, []);

  let changeBytext = (e) => {
    let value = e.target.value;
    let match = positions.find((pos) => pos.english_name === value);
    let idToDefine = match !== undefined ? match.id : "all";
    setcurent(idToDefine);
    filter(idToDefine);
  };
  let setInputTextVal = () => {
    let toReturn =
      filteredPositions.length === 0 || filteredPositions.length > 1
        ? ""
        : filteredPositions[0].english_name;
    console.log(toReturn);
    return toReturn;
  };

  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Form.Select
            value={curent}
            onChange={(e) => {
              setcurent(e.target.value);
              filter(e.target.value);
            }}
            className="me-4"
            aria-label="Default select example"
          >
            <option value={"all"}>All Position</option>

            {positions.map(({ id, sanskrit_name }) => {
              return (
                <option key={id} value={id}>
                  {sanskrit_name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            value={curent}
            onChange={(e) => {
              setcurent(e.target.value);
              filter(e.target.value);
            }}
            className="me-4"
            aria-label="Default select example"
          >
            <option value={"all"}>All Position</option>

            {positions.map(({ id, english_name }) => {
              return (
                <option key={id} value={id}>
                  {english_name}
                </option>
              );
            })}
          </Form.Select>
          {/* value = {setInputTextVal()} */}
          <input
            onChange={changeBytext}
            className="form-control"
            list="datalistOptions"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            {positions.map(({ id, english_name }) => {
              return <option key={id} value={english_name} />;
            })}
          </datalist>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    positions: state.positions,
    filteredPositions: state.filteredPositions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (id) => dispatch(fetcher(id)),
    filter: (id) => dispatch(chanegFiletred(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
