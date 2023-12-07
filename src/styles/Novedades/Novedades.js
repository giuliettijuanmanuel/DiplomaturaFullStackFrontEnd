import styled from "styled-components";

export const NovedadesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;
