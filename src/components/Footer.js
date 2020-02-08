import React from "react";
import FooterItems from "./FooterItems";
import Copyright from "./Copyright";

function Footer() {
  return (
    <section className="section-footer">
      <div className="container">
        <FooterItems
          itemOne="Company"
          itemOnePath="/company"
          itemTwo="Contact Us"
          itemTwoPath="/contact"
          itemThree="Careers"
          itemThreePath="/careers"
          itemFour="Privacy Policy"
          itemFourPath="/privacy-policy"
          itemFive="Terms"
          itemFivePath="/terms-and-conditions"
        />
        <Copyright content="Martin Fuster" />
      </div>
    </section>
  );
}

export default Footer;
