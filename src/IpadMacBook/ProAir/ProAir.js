import React, { Component } from 'react'

class ProAir extends Component {
  render() {
      return (
        <div>
            <li>
              <a href="">{this.props.LinkName}</a>
            </li>
          
          <div className="new-alert">{this.props.new}</div>

          <div className="title-wraper bold black">{this.props.device}</div>
        </div>
      );
  }
}
export default ProAir