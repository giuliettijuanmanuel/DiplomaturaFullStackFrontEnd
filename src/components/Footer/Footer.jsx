import React from "react";
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterWrapper,
} from "../../styles/Footer/Footer";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLeft>
          <img src="./images/logo.png" alt="Logo" width={120} />
          <span className="secondaryText">Full Slab, lo mejor para vos.</span>
        </FooterLeft>
        <FooterRight>
          <span className="primaryText">Información</span>
          <span className="secondaryText">
            Fray Luis Beltran 461, Campana, Buenos Aires, ARG
          </span>
        </FooterRight>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
