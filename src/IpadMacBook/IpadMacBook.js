import React, { Component } from "react";
import IpadPro from "./IpadPro";
import MacBookAir from "./MacBookAir";
class IpadMacBook extends Component {
  render() {
      return (
        <div>
          <IpadPro />
          <MacBookAir />
        </div>
      );
  }
}
export default IpadMacBook;
