import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
        <Alert color="light">
          Simple Alert [color: light]
        </Alert>
        {/* 기본 알람 */}
        <UncontrolledAlert color="wraning">
          Uncontrolled Alert [color: wraning]
        </UncontrolledAlert>
        {/* 삭제 가능한 알람 */}
      </div>
    )
  }
}

export default R034_ReactstrapAlerts;