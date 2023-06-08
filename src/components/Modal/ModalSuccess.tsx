import { createPortal } from "react-dom";
import { ReactComponent as CheckModalSvg } from "assets/images/checkModal.svg";
import * as SC from './ModalStyled';

const modalRoot = document.querySelector("#modal-root")!;

// interface IItem {
//     data: string;
//     toggle: Function;
// }

interface IProps {

    toggle: () => void;
    email: string;
};

const ModalSuccess: React.FC<IProps> = ({ toggle, email }) => {
    const closeModal = () => {
        toggle();
    };

    return createPortal(
        <SC.Overlay>
            <SC.ModalText>

                <CheckModalSvg />
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation email has been sent to</p>
                <span>{email}</span>
                <p> Please open it and click the button inside to confirm your subscription</p>

            </SC.ModalText>
            <div>
                <button onClick={closeModal}>Dismiss message</button>
            </div>
        </SC.Overlay>,
        modalRoot
    );
};

export default ModalSuccess;
