import React, { Component } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <>
        <InputGroup>
          <Input placeholder="userid" />
          <InputGroupAddon addonType="append">
            <InputGroupText>@reactmain.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>button</Button>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </>
    )
  }
}

export default R045_ReactstrapInputGroup;