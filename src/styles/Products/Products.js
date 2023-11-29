import styled from "styled-components";

export const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export const ProductsList = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  .cardHeader {
    width: 250px;
    height: 250px;
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
    text-align: center;
    gap: 0.5rem;
  }
`;
