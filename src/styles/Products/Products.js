import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
`;

export const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    border: 1px solid lightgray;
    box-shadow: 2px 2px 8px 4px #d3d3d3d1;
    border-radius: 15px;
    font-family: sans-serif;
    width: 250px;
  }

  .cardHeader {
    width: 100%;
    height: 200px;
  }
  .cardHeader > img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }
  :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    flex: 1 1 100%;
    text-align: center;

    .primaryText {
      font-size: 18px;
    }
  }
  .cardFooter {
    background: #6699ff;
    border-radius: 0 0 15px 15px;
    padding: 10px;
    text-align: center;
  }
  .cardFooter a {
    text-decoration: none;
    color: white;
  }
  .cardFooter a:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
`;
