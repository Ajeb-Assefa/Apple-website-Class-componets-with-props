import React, { Component } from "react";
import ProAir from "./ProAir/ProAir";
class IpadPro extends Component {
  render() {
    return (
      <section className="first-hightlight-wrapper">
        <div className="container">
          <ProAir new="New" />
          <ProAir device="iPad Pro" />

          <div className="links-wrapper">
            <ul>
              <ProAir LinkName="Learn more" />
              <ProAir LinkName="Order" />
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default IpadPro;
