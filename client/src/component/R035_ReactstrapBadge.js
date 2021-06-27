import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
// reactstrap은 bootstrap 4버전 기준으로 작성된 라이브러리임
// https://reactstrap.github.io/

class R035_ReactstrapBadge extends Component {
  render() {
    return (
      <div>
        <h1>PRODUCT NAME <Badge color ="secondary">hit</Badge></h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>pill</Badge>
        <Badge href="localhost:3000" color="light">GoLink</Badge>
      </div>
    )
  }
}
export default R035_ReactstrapBadge;