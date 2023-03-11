import React, { Component } from "react";

class FooterLink extends Component {
  render() {
    return (
      <li>
        <a href={this.props.Url}>{this.props.Name}</a>
      </li>
    );
  }
}
export default FooterLink;
