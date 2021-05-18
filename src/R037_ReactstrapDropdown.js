import React, { Component } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R037_ReactstrapDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>벼튼 Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href="https://github.com/dev-chloe">
            <DropdownItem>example 웹 사이트로 이동</DropdownItem>
          </a>
          <DropdownItem onClick={e => alert("alert 버튼")}>
            Alert 버튼
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

export default R037_ReactstrapDropdown;