import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: rgb(1, 1, 1, 0.2);
  padding: 0.5rem;
  /* position: absolute;
  bottom: 0; */
  /* margin-top: 3%; */
`;

export const FooterHeader = styled.p`
  font-size: 1.25rem;
  font-family: "Anton";
  margin: 0 0 0 2%;
`;
export const FooterItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FooterItem = styled.span`
  font-size: 1.35rem;
  font-family: "Rajdhani";
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  &:hover {
    background: var(--lightest-blue);
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  margin-left: 2%;
  font-family: "Rajdhani";
  font-weight: 900;
`;
