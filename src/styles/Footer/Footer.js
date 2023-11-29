import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: rgb(48, 46, 46);
  margin-top: 2rem;
`;

export const FooterContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  row-gap: 2rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > img {
    border-radius: 100%;
    width: 80px;
    height: 8%;
  }

  @media (max-width: 768px) {
    > img {
      margin: 0 auto;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    :nth-child(1) {
      margin: 0 auto;
      margin-bottom: 0.5rem;
    }
  }
`;
