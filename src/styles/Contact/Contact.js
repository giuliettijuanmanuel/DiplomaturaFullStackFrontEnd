import styled from "styled-components";

export const ContactWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const ContactContainer = styled.div`
  display: flex;
  row-gap: 2rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem;

  > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ContactModes = styled.div`
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ContactMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  padding: 1rem;
  border: 0.8px solid rgba(128, 128, 128, 0.143);
  border-radius: 5px;
  gap: 1rem;

  :nth-child(1) {
    gap: 1.6rem;
  }
  :nth-child(2) > .primaryText {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContactIcon = styled.div`
  display: flex;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #eeeeff;
  padding: 10px;
  border-radius: 5px;
  color: var(--blue);
`;

export const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContactButton = styled.div`
  display: flex;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  .button {
    width: 100%;
    background: var(--lightBlue);
    color: var(--blue);
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }
  :hover {
    background: var(--blue-gradient);
    color: white;
  }
`;

export const ContactRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContactMapContainer = styled.div`
  display: block;
  width: 100%;

  > iframe {
    width: 100%;
    height: 500px;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
