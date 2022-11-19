import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  /* background-color: rgba(255, 255, 255, 0.589); */
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  width: 40%;
  height: 40%;
  padding: 1rem;
  border: 1px solid #dddddd;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconCWrapper = styled.div`
  margin-top: 7%;
`;

export const Icon = styled.img`
  width: 2.5rem;
`;

export const ModalMessage = styled.p`
  font-size: 1.5rem;
  font-family: "Architects Daughter";
`;
