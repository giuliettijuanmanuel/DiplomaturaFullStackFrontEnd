import styled from "styled-components";

export const UsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const UsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  > div {
    width: 100%;
  }
`;

export const UsLeft = styled.div`
  flex: 1;
  padding-left: 1rem;
  width: 50%;
`;

export const UsRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
