import styled from "styled-components";
import Plus from "../../../../assets/plus.png";
import { ModalContainer } from "../../../modal/modalElements";
import Modal from "../../../modal/modal";
import {
  authContext,
  modalContext,
  updateContext,
} from "../../../../context/context";
import { useContext, useState, useRef } from "react";
import AddList from "../../../../hooks/addLists";
import { useParams } from "react-router-dom";

const AdderBody = styled.div`
  padding: 1.5rem;
  background: #bababa;
  background: #ebe8e8;
  width: 12rem;
  margin-top: 2%;
  border-radius: 0.25rem;
  box-shadow: 2px 2px rgb(0, 0, 0, 0.5);
  text-align: center;
`;

const PlusSign = styled.img`
  width: 2.5rem;
  border: 1px solid #bababa;
  border-radius: 50%;
  padding: 0.15rem;
  cursor: pointer;
`;
export const CloseIcon = styled(PlusSign)`
  width: 1.5rem;
  transform: rotate(45deg);
  /* float: right; */
  position: relative;
  left: 95%;
  border: none;
`;

export const PopUpModalContainer = styled(ModalContainer)`
  background-color: rgba(0, 0, 0, 0.4);
`;
export const PopUpModal = styled.div`
  width: 40%;
  height: 45%;
  padding: 1rem;
  border: 1px solid #dddddd;
  background: #ffffff;
`;
export const FormInput = styled.input.attrs({
  autocomplete: "off",
})`
  width: 100%;
  padding: 0.35rem 0.5rem;
  margin-top: 2%;
  font-family: "Roboto Slab";
  background: #ffffffff;
  font-weight: 600;
  border: 0.5px solid rgb(0, 0, 0, 0.5);
  border-radius: 0.15rem;
  &::placeholder {
    color: rgb(0, 0, 0, 0.8);
  }
  &:focus {
    outline: none;
    border: 1px solid rgb(0, 0, 0, 10);
  }
`;

export const LoginLabel = styled.p`
  font-size: 1.25rem;
  color: black;
  font-weight: 700;
  /* margin-top: ${(props) => (props.primary ? "2%" : "1%")}; */
  margin-top: 2%;
  font-family: "Roboto Slab";
`;
export const LoginButton = styled.button`
  background: var(--dark-blue);
  color: black;
  font-family: "Roboto Slab";
  padding: 0.5rem 1.25rem;
  font-weight: 900;
  outline: none;
  border: 0.5px solid rgb(0, 0, 0, 1);
  border-radius: 0.2rem;
  cursor: pointer;
`;
export const BtnWrapper = styled.div`
  text-align: center;
  margin-top: 5%;
`;

const ListsAdder = () => {
  const { auth, setAuth } = useContext(authContext);
  const { modalData, setModalData } = useContext(modalContext);
  const { update, setUpdate } = useContext(updateContext);
  const [show, setShow] = useState(false);
  const titleRef = useRef();
  const colorRef = useRef();
  const { buid } = useParams();
  return (
    <>
      {modalData && <Modal data={modalData} setState={setModalData} />}
      <AdderBody>
        <PlusSign src={Plus} onClick={() => setShow(true)} />
      </AdderBody>
      <PopUpModalContainer style={{ display: show ? "flex" : "none" }}>
        <PopUpModal>
          <CloseIcon src={Plus} onClick={() => setShow(false)} />
          <LoginLabel>List Title</LoginLabel>
          <FormInput
            placeholder={"Enter the title of the list"}
            ref={titleRef}
          />
          <LoginLabel>List Color :
          <FormInput type={"color"} style={{width: "4rem", marginLeft: "5%"}} ref={colorRef}/>
          </LoginLabel>
          <BtnWrapper>
            <LoginButton
              onClick={async (e) => {
                e.preventDefault();
                console.log(colorRef.current.value)
                var response = await AddList(
                  buid,
                  titleRef.current.value,
                  colorRef.current.value,
                  auth.token
                );
                setShow(false);
                setModalData(response);
                setUpdate(!update);
                titleRef.current.value = null;
              }}
            >
              Add List
            </LoginButton>
          </BtnWrapper>
        </PopUpModal>
      </PopUpModalContainer>
    </>
  );
};

export default ListsAdder;
