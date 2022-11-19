import styled from "styled-components";
import Header from "../header/header"
export const Content = styled.div`
  width: 92%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
