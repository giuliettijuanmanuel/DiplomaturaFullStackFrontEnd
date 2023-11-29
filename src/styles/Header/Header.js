import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(48, 46, 46);

  .logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logo > img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-left: 1rem;
  }

  @media (min-width: 624px) {
    position: static;
    .logo {
      width: 100%;
    }
    .logo > img {
      width: 70px;
      height: 70px;
      border-radius: 100%;
      margin-left: 1rem;
    }
  }
`;
