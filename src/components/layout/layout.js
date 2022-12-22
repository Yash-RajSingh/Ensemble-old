import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
export const Content = styled.div`
  width: 92%;
  margin: 0 auto;
  min-height: calc(
    ${(props) => props.screen}px - ${(props) => props.height}px -
      ${(props) => props.footer}px - 147px
  );
`;

const Layout = ({ children }) => {
  const [HeaderHeight, setHeaderHeight] = useState();
  const [FooterHeight, setFooterHeight] = useState();
  useEffect(() => {
    setHeaderHeight(document.getElementById("Header").clientHeight);
    setFooterHeight(document.getElementById("Footer").clientHeight);
  });
  return (
    <>
      <Header />
      <Content
        height={HeaderHeight}
        footer={FooterHeight}
        screen={window.screen.height}
      >
        {children}
      </Content>
    </>
  );
};

export default Layout;
