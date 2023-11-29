import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background: rgb(48, 46, 46);
  right: ${(props) => (props.open ? "0" : "-100%")};
  top: 10vh;
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  z-index: 99;
  color: #000;
  a {
    padding: 0.5rem 0.8rem;
    color: white;
    text-decoration: none;
    font-size: 22px;
  }
  .userAccount {
    background: none;
    border: none;
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }
  .userAccount {
    font-size: 30px;
  }
`;
