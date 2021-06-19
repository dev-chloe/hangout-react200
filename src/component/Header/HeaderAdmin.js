import { Component } from "react";
import { Link } from "react-router-dom";

class HeaderAdmin extends Component {
  render() {
    return (
      <>
        <header>
          <div className="inner">
            <Link to={'/'}>Logo</Link>
          </div>
        </header>
      </>
    )
  }
}

export default HeaderAdmin;