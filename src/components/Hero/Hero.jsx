import React from "react";
import {
  BannerContainer,
  BannerDescription,
  BannerImageContainer,
  BannerLeft,
  BannerRight,
  BannerSearchBar,
  BannerTitle,
  BannerWrapper,
} from "../../styles/Hero/Hero";

const Hero = () => {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerLeft>
          <BannerTitle>
            <h1>
              Full <br />
              Slab <br />
              S.A.S
            </h1>
          </BannerTitle>
          <BannerDescription>
            <span className="secondaryText">
              Buscá tus productos de manera fácil y rápida
            </span>
            <span className="secondaryText">
              No te olvides de consultarnos por tus productos!
            </span>
          </BannerDescription>
          <BannerSearchBar>
            <input
              type="search"
              placeholder="Busca productos, marcas y más.."
              name="search"
            />
            <button className="button">Search</button>
          </BannerSearchBar>
        </BannerLeft>
        <BannerRight>
          <BannerImageContainer>
            <img src="./images/banner03.jpg" alt="banner" />
          </BannerImageContainer>
        </BannerRight>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Hero;
