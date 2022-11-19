import styled from "styled-components";
import Dots from "../../../../assets/dots.jpg";
import {
  updateContext,
  modalContext,
  updaterModalContext,
} from "../../../../context/context";
import DeleteBoard from "../../../../hooks/deleteBoards";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const BoardBody = styled.div`
  padding: 0.5rem;
  background: var(--mid-blue);
  width: 12rem;
  margin-top: 2%;
  border-radius: 0.25rem;
  box-shadow: 2px 2px black;
`;
const BoardTitle = styled.p`
  font-size: 1.5rem;
  font-family: "Bebas Neue";
  cursor: pointer;
  width: max-content;
`;
const BoardDescription = styled.p`
  font-size: 1rem;
  font-family: "Architects Daughter";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const TriDots = styled.img`
  width: 1rem;
  float: right;
  z-index: 5;
  cursor: pointer;
`;

const DropDown = styled.ul`
  position: absolute;
  margin: 2.5% 0 0 0;
  padding: 0;
  width: 6.25rem;
  /* left: 50%; */
  margin-left: calc((160px / 2) * 1);
  box-sizing: border-box;
  z-index: 2;
  background: white;
  border-radius: 0.37rem;
  list-style: none;

  &::before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    top: -9px;
    left: 87%;
    margin-left: -10px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
  }
`;
const DropDownItem = styled.li`
  padding: 5px 10px;
  margin: 0;
  color: black;
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const Board = ({ data }) => {
  let navigate = useNavigate();
  const { update, setUpdate } = useContext(updateContext);
  const { modalData, setModalData } = useContext(modalContext);
  const { showUpdater, setShowUpdater } = useContext(updaterModalContext);
  const [showDropdwon, setShowDropdown] = useState(false);
  return (
    <>
      <BoardBody id={data.board_buid}>
        <TriDots src={Dots} onClick={()=> setShowDropdown(true)}/>
        <DropDown style={{ display: showDropdwon ? "block" : "none" }}>
          <DropDownItem
            onClick={() => {
              setShowUpdater(`${data.board_buid}`);
              setShowDropdown(false);
            }}
          >
            Edit
          </DropDownItem>
          <DropDownItem
            onClick={async (e) => {
              e.preventDefault();
              var response = await DeleteBoard(data.board_buid);
              setModalData(response);
              setUpdate(!update);
              setShowDropdown(false);
            }}
          >
            Delete
          </DropDownItem>
          <DropDownItem onClick={() => setShowDropdown(false)}>
            Close
          </DropDownItem>
        </DropDown>
        <BoardTitle
          onClick={() => {
            navigate(`/list/${data.board_buid}`)
          }}
        >
          {data.board_title}
        </BoardTitle>
        <BoardDescription>{data.board_description}</BoardDescription>
      </BoardBody>
    </>
  );
};

export default Board;
