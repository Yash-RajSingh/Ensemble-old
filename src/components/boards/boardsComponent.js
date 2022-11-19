import { useEffect, useState, useContext } from "react";
import GetBoards from "../../hooks/getBoards";
import {
  authContext,
  updateContext,
  updaterModalContext,
} from "../../context/context";
import Board from "./boardsElements/board/board";
import styled from "styled-components";
import BoardsAdder from "./boardsElements/boardAdder/boardsAdder";
import BoardsUpdater from "./boardsElements/boardUpdater/boardsUpdater";

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 1.5%;
`;
const SubDiv = styled.div`
  min-height: calc(${(props) => props.screen}px - ${(props) => props.height}px - ${(props) => props.footer}px - 147px);
`;

const BoardsComponent = () => {
  const [boardsData, setBoardsData] = useState();
  const [showUpdater, setShowUpdater] = useState(false);
  const { update, setUpdate } = useContext(updateContext);
  const { auth, setAuth } = useContext(authContext);
  const [HeaderHeight, setHeaderHeight] = useState();
  const [FooterHeight, setFooterHeight] = useState();
  useEffect(() => {
    (async () => {
      const response = await GetBoards(auth.uid, auth.token);
      response.status === 200 ? setBoardsData(response) : setBoardsData(false);
    })();
    setHeaderHeight(document.getElementById("Header").clientHeight);
    setFooterHeight(document.getElementById("Footer").clientHeight);
    console.log(window.screen.height);
  }, [update]);
  return (
    <>
      <updaterModalContext.Provider value={{ showUpdater, setShowUpdater }}>
        <BoardsUpdater />
        <SubDiv
          height={HeaderHeight}
          footer={FooterHeight}
          screen={window.screen.height}
        >
          <BoardContainer>
            <BoardsAdder />
            {boardsData &&
              boardsData.data.map((element) => {
                return (
                  <>
                    <Board data={element} />
                  </>
                );
              })}
          </BoardContainer>
        </SubDiv>
      </updaterModalContext.Provider>
    </>
  );
};

export default BoardsComponent;
