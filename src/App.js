import { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Footer from "../src/Footer/Footer";
import AllertSection from "./AllertSection/AllertSection";
import IpadMacBook from "./IpadMacBook/IpadMacBook";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AllertSection />
        <IpadMacBook />
        <Footer />
      </div>
    );
  }
}
export default App;
