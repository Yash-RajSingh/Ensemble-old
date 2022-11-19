import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderButton, HeaderContainer, HeaderTitle } from "./headerElements";
import { authContext } from "../../context/context";

const Header = () => {
  const [show, setShow] = useState(true);
  const { auth, setAuth } = useContext(authContext);

  let navigate = useNavigate();
  let param = window.location.href;
  useEffect(() => {
    if (param.includes("login") || auth) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);
  return (
    <>
      <HeaderContainer id="Header">
        <HeaderTitle>Ensemble</HeaderTitle>
        {show && (
          <HeaderButton onClick={() => navigate("/login")}>Login</HeaderButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
