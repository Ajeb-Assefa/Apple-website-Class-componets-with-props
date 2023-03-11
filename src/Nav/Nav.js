import React, { Component } from "react";
import logo from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink/HeaderLink";
export default class Nav extends Component {
  render() {
    return (
      <div class="nav-wrapper fixed-top">
        <div class="container">
          <nav class="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a class="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div class="navbar-collapse collapse">
              <ul class="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink linkUrl="/mac" linkName="Mac" />

                <HeaderLink linkUrl="/iphone" linkName="iphone" />

                <HeaderLink linkUrl="/ipad" linkName="ipad" />

                <HeaderLink linkUrl="/watch" linkName="watch" />

                <HeaderLink linkUrl="/tv" linkName="tv" />

                <HeaderLink linkUrl="/Music" linkName="Music" />

                <HeaderLink linkUrl="/Support" linkName="Support" />

                
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
