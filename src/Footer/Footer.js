import React, { Component } from "react";
import FooterLink from "./FooterLink/FooterLink";
import flag from "../commonResource/images/icons/16.png";
import "../Footer/Custom";
class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the{" "}
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
              >
                {" "}
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                {" "}
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                <FooterLink Url="#" Name="Mac" />
                <FooterLink Url="#" Name="iPad" />
                <FooterLink Url="#" Name="iPhone" />
                <FooterLink Url="#" Name="Watch" />
                <FooterLink Url="#" Name="TV" />
                <FooterLink Url="#" Name="Music" />
                <FooterLink Url="#" Name="AirPods" />
                <FooterLink Url="#" Name="HomePod" />
                <FooterLink Url="#" Name="iPod touch" />
                <FooterLink Url="#" Name="Accessories" />
                <FooterLink Url="#" Name="Gift Cards" />
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>
              <ul>
                <FooterLink Url="#" Name="Apple Music" />
                <FooterLink Url="#" Name="Apple News+" />
                <FooterLink Url="#" Name="Apple TV+" />
                <FooterLink Url="#" Name="Apple Arcade" />
                <FooterLink Url="#" Name="Apple Card" />
                <FooterLink Url="#" Name="iCloud" />
              </ul>
              <h3>Account</h3>
              <ul>
                <FooterLink Url="#" Name="Manage Your Apple ID" />
                <FooterLink Url="#" Name="Apple Store Account" />
                <FooterLink Url="#" Name="iCloud.com" />
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
                <FooterLink Url="#" Name="Find a Store" />
                <FooterLink Url="#" Name="Genius Bar" />
                <FooterLink Url="#" Name="Today at Apple" />
                <FooterLink Url="#" Name="Apple Camp" />
                <FooterLink Url="#" Name="Field Trip" />
                <FooterLink Url="#" Name="Apple Store App" />
                <FooterLink Url="#" Name="Refurbished and Clearance" />
                <FooterLink Url="#" Name="Financing" />
                <FooterLink Url="#" Name="Apple Trade In" />
                <FooterLink Url="#" Name="Order Status" />
                <FooterLink Url="#" Name="Shopping Help" />
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
                <FooterLink Url="#" Name="Apple and Business" />
                <FooterLink Url="#" Name="Shop for Business" />
              </ul>
              <h3>For Education</h3>
              <ul>
                <FooterLink Url="#" Name="Apple and Education" />
                <FooterLink Url="#" Name="Shop for College" />
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                <FooterLink Url="#" Name="Apple in Healthcare" />
                <FooterLink Url="#" Name="Health on Apple Watch" />
                <FooterLink Url="#" Name="Health Records on iPhone" />
              </ul>
              <h3>For Government</h3>
              <ul>
                <FooterLink Url="#" Name="Shop for Government" />
                <FooterLink Url="#" Name="Shop for Veterans and Military" />
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
                <FooterLink Url="#" Name="Accessibility" />
                <FooterLink Url="#" Name="Education" />
                <FooterLink Url="#" Name="Environment" />
                <FooterLink Url="#" Name="Inclusion and Diversity" />
                <FooterLink Url="#" Name="Privacy" />
                <FooterLink Url="#" Name="Racial Equity and Justice" />
                <FooterLink Url="#" Name="Supplier Responsibility" />
              </ul>
              <h3>About Apple</h3>
              <ul>
                <FooterLink Url="#" Name="Newsroom" />
                <FooterLink Url="#" Name="Apple Leadership" />
                <FooterLink Url="#" Name="Career Opportunities" />
                <FooterLink Url="#" Name="Investors" />
                <FooterLink Url="#" Name="Ethics & Compliance" />
                <FooterLink Url="#" Name="Events" />
                <FooterLink Url="#" Name="Contact Apple" />
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <FooterLink Url="#" Name="Privacy Policy" />
                <FooterLink Url="#" Name="Terms of Use" />
                <FooterLink Url="#" Name="Sales and Refunds" />
                <FooterLink Url="#" Name="Legal" />
                <FooterLink Url="#" Name="Site Map" />
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} />
              </div>{" "}
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
