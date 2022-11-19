import {
  modalContext,
  updateContext,
  updaterModalContext,
} from "../../../../context/context";
import Plus from "../../../../assets/plus.png";
import { useRef, useContext } from "react";
import {
  PopUpModalContainer,
  PopUpModal,
  CloseIcon,
  LoginLabel,
  LoginButton,
  BtnWrapper,
  FormInput,
} from "../boardAdder/boardsAdder";
import UpdateBoard from "../../../../hooks/updateBoards";
const BoardsUpdater = () => {
  const { modalData, setModalData } = useContext(modalContext);
  const { update, setUpdate } = useContext(updateContext);
  const { showUpdater, setShowUpdater } = useContext(updaterModalContext);
  const newTitleRef = useRef();
  const newDescriptionRef = useRef();
  return (
    <>
      <PopUpModalContainer style={{ display: showUpdater ? "flex" : "none" }}>
        <PopUpModal>
          <CloseIcon src={Plus} onClick={() => setShowUpdater(false)} />
          <LoginLabel>New Title</LoginLabel>
          <FormInput
            placeholder={"Enter the new title of the board"}
            ref={newTitleRef}
          />
          <LoginLabel>New Description</LoginLabel>
          <FormInput
            placeholder={"Enter the new description of the board"}
            ref={newDescriptionRef}
          />
          <BtnWrapper>
            <LoginButton
              onClick={async (e) => {
                e.preventDefault();
                var response = await UpdateBoard(
                  showUpdater,
                  newTitleRef.current.value,
                  newDescriptionRef.current.value
                );
                setShowUpdater(false);
                setModalData(response);
                setUpdate(!update);
                newTitleRef.current.value = newDescriptionRef.current.value =null;
              }}
            >
              Update Board
            </LoginButton>
          </BtnWrapper>
        </PopUpModal>
      </PopUpModalContainer>
    </>
  );
};

export default BoardsUpdater;
