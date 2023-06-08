import { createPortal } from "react-dom";

import * as SC from './ModalStyled'


const modalRoot = document.querySelector("#modal-root")!;

interface IProps{
    toggle: Function;
    data: string;
}


const Modal:React.FC<IProps> = ({toggle, data }) => {

    const closeModal = () => {
      toggle()
  }

    return createPortal(
        <SC.Overlay>
            <SC.Modal>Modal</SC.Modal>
            <button onClick={closeModal}></button>
        </SC.Overlay>,
        modalRoot
    );
}

export default Modal;
