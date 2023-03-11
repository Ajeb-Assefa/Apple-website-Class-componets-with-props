import React, { Component } from "react";
class HeaderLink extends Component {
  render() {
      return (
       
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href={this.props.linkUrl}>
              {this.props.linkName}
            </a>
          </li>
      
      );
  }
}
export default HeaderLink;
