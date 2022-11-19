import {
  IconCWrapper,
  ModalContainer,
  ModalWrapper,
  ModalMessage,
  Icon,
} from "./modalElements";
import Right from '../../assets/right.png'
import Wrong from '../../assets/wrong.png'
import { useEffect, useState } from "react";
const Modal = ({ data, setState }) => {
  const [modal, setModal] = useState(true);
  var type = (data.status === 200) ? true : false
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
      setState(null);
    }, 1300);
  });
  return (
    <>
      {modal && (
        <ModalContainer>
          <ModalWrapper>
            <ModalMessage>{data.message}</ModalMessage>
            <IconCWrapper>
              <Icon src={type ? Right : Wrong} />
            </IconCWrapper>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
