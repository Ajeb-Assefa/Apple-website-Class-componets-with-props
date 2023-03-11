import React, { Component } from "react";
import ProAir from "./ProAir/ProAir";
class MacBookAir extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <div className="container">
          <ProAir new="New" />
          <ProAir device="MacBook Air" />
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <ProAir LinkName="Learn more" />
              <ProAir LinkName="Order" />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default MacBookAir;
