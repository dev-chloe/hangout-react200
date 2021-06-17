import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class R053_ReactstrapSpinner extends Component {
  render() {
    return (
      <>
        <Spinner color="secondary" />
        <Spinner color="succss" />
        <Spinner color="dark" type="grow" />
        <Spinner color="info" type="grow" />
        <Spinner color="primary" size="sm" />
        <Spinner color="dark" style={{width: '10rem', height: '10rem'}} />
        <Spinner color="secondary" style={{ width: '3rem', height: '10rem'}} />
        <Spinner color="primary" type="grow" style={{ width: '3rem', height: '10rem'}} />
      </>
    )
  }
}

export default R053_ReactstrapSpinner;