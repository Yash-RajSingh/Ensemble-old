// import { useEffect, useState, useContext } from "react";
// import GetBoards from "../../hooks/getBoards";
// import {
//   authContext,
//   updateContext,
//   updaterModalContext,
// } from "../../context/context";
// import styled from "styled-components";

// const BoardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: start;
//   gap: 1.5%;
// `;

// const BoardsComponent = () => {
//   const [boardsData, setBoardsData] = useState();
//   const { update, setUpdate } = useContext(updateContext);
//   const { auth, setAuth } = useContext(authContext);
//   useEffect(() => {
//     (async () => {
//       const response = await GetBoards(auth.uid, auth.token);
//       response.status === 200 ? setBoardsData(response) : setBoardsData(false);
//     })();
//   }, [update]);
//   return (
//     <>
//       <updaterModalContext.Provider value={{ showUpdater, setShowUpdater }}>
//         <BoardContainer>
//           {boardsData &&
//             boardsData.data.map((element) => <Board data={element} />)}
//         </BoardContainer>
//       </updaterModalContext.Provider>
//     </>
//   );
// };

// export default BoardsComponent;
