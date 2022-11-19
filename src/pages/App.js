import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/footer";
import { GlobalStyles } from "../globalStyles/globalStyles";
import HomePage from "./homepage/homepage";
import LoginPage from "./loginPage/loginPage";
import { useState } from "react";
import { authContext, modalContext, updateContext } from "../context/context";
import AboutPage from "./aboutPage/aboutPage";
import BoardsPage from "./boardsPage/boardsPage";
import ListPage from "./listsPage/listsPage";

const App = () => {
  const [auth, setAuth] = useState();
  const [update, setUpdate] = useState(false);
  const [modalData, setModalData] = useState();
  return (
    <Router>
      <GlobalStyles />
      <updateContext.Provider value={{ update, setUpdate }}>
        <modalContext.Provider value={{ modalData, setModalData }}>
          <authContext.Provider value={{ auth, setAuth }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/boards" element={<BoardsPage />} />
              <Route path="/list/:buid" element={<ListPage />} />
            </Routes>
          </authContext.Provider>
        </modalContext.Provider>
      </updateContext.Provider>
      <Footer />
    </Router>
  );
};

export default App;
