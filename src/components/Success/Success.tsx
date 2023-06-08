import { ReactComponent as CheckModalSvg } from "assets/images/checkModal.svg";
import { useNavigate } from "react-router-dom";

interface IProps {
    email: string;
};


const Success: React.FC<IProps> = ({email}) => {

    const navigate = useNavigate()

    const closeModal = () => {
        navigate("/")
    };

    return (<div>
        <div>
            <div>
                <CheckModalSvg />
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation email has been sent to</p>
                <span>{email}</span>
                <p> Please open it and click the button inside to confirm your subscription</p>
            </div>
            <button onClick={closeModal}>Dismiss message</button>
        </div>
    </div> );
}
 
export default Success;