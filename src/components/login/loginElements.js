import styled from "styled-components";
import { HeaderButton } from "../header/headerElements";

export const LoginContainer = styled.div`
  margin-top: 2%;
`;
export const LoginWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  color: black;
  `;
export const LoginImage = styled.img`
  width: 40%;
  margin-top: 3%;
  `;
export const LoginFormWrapper = styled.div`
  width: 21rem;
  display: flex;
  gap: 5%;
  overflow: hidden;
  align-items: flex-start;
  `;
export const LoginForm = styled.form`
  background: var(--white);
  color: black;
  margin: 0 auto;
  min-width: 20rem;
  padding: 1rem;
  font-family: "Rajdhani";
  font-weight: 900;
  transition: margin-left 0.5s;
  border-radius: 0.25rem;
  &:hover{
    background: #fff;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 3%;
`;

export const Label = styled.span`
  font-size: 1.25rem;
`;
export const FormInput = styled.input.attrs({
  autocomplete: "off",
})`
  width: 100%;
  margin: 2% auto;
  padding: 0.35rem 0.5rem;
  font-size: 0.9rem;
  border: 1px solid rgb(0, 0, 0, 0.5);
  &:focus {
      outline: none;
    border: 1px solid rgb(0, 0, 0, 10);
  }
  `;

export const InputSelect = styled.select`
  padding: 0.35rem 0.5rem;
  width: 100%;
  margin: 2% auto;
  font-size: 0.9rem;
  color: grey;
  &:focus {
      outline: none;
    border: 1px solid rgb(0, 0, 0, 10);
  }
`;

export const InputOptions = styled.option`
  margin-top: 20px;
  font-size: 1rem;
  background: var(--lightest-blue);
`;

export const LoginButton = styled(HeaderButton)`
  position: relative;
  left: 35%;
  margin-top: 5%;
`;
