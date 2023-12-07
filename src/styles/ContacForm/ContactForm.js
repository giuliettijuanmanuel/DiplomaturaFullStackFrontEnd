import styled from "styled-components";

export const ContactWrapper = styled.form`
  width: 700px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
`;

export const Button = styled.button`
  width: 110px;
  height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: White;
  font-weight: 500;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1280px;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.3rem 0.5rem;
  }
`;

export const ContactInfo = styled.div`
  width: 30%;
  background-color: #007bff;
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px 0 0 5px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Map = styled.div`
  width: 70%;
  border-radius: 0 5px 5px 0;

  > iframe {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 5px;
  }
`;
