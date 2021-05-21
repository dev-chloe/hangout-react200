import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1 className="display-4">REACT 200</h1>
          <p className="h4">Contrary to poplar belief,
          Lorem Ipsum is not simply random text.</p>
          <hr className="my-2" />
          <p>There are many variations of passages of LoremIpsum available.</p>
          <p className="lead">
            <Button color="danger">Go Detail</Button>
          </p>
        </Jumbotron>
      </>
    )
  }
}
export default R046_ReactstrapJumbotron;