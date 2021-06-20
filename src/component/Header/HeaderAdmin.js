import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderAdmin extends Component {
  render() {
    return (
      <>
        <header>
          <div className="inner">
            <Link to={'/'}>Logo</Link>

            <nav>
              <ul>
                <li>
                  <Link to={'/Debounce'}>Debounce</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default HeaderAdmin;
