import styled from "styled-components";

export const BannerWrapper = styled.div`
  color: white;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-color: #131110;
`;

export const BannerContainer = styled.div`
  display: flex;
  row-gap: 2rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 8rem;
  width: 100%;
  padding: 1.5rem;

  @media (max-width: 624px) {
    .banner-container {
      padding-top: 1rem;
    }
  }
`;

export const BannerLeft = styled.div`
  gap: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerTitle = styled.div`
  position: relative;
  z-index: 1;

  > h1 {
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 4rem;
  }

  @media (max-width: 624px) {
    > h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

export const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerSearchBar = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 3px solid rgba(120, 120, 120, 0.374);
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > input {
    outline: none;
    border: none;
    font-size: 18px;
  }
`;

export const BannerRight = styled.div`
  @media (min-width: 624px) {
    .banner-wrapper {
      padding-top: 0;
    }
  }
`;

export const BannerImageContainer = styled.div`
  width: 30rem;
  height: 35rem;
  overflow: hidden;
  border-radius: 15rem 15rem 0 0;
  border: 8px solid rgba(255, 255, 255, 0.12);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 624px) {
    width: 95%;
    height: 25rem;
  }
`;
