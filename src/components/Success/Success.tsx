import { ReactComponent as CheckModalSvg } from "assets/images/checkModal.svg";
import { useNavigate } from "react-router-dom";


import * as SC from "./SuccessStyled"
interface IProps {
    email: string | null; 
};


const Success: React.FC<IProps> = ({email}) => {


    console.log(email);
    
    const navigate = useNavigate()

    const dismiss = () => {
        navigate("/")
    };

    return (
        <SC.PageContainer>
        <SC.SuccessPage>
        
            <SC.TextContainer>
                <CheckModalSvg />
                <SC.Title>Thanks for subscribing!</SC.Title>
                <SC.Text>A confirmation email has been sent to</SC.Text>
                <span>{email}</span>
                <SC.Text> Please open it and click the button inside to confirm your subscription</SC.Text>
            </SC.TextContainer>
        <SC.DismissButton onClick={dismiss}>Dismiss message</SC.DismissButton>
        
            </SC.SuccessPage>
        </SC.PageContainer>
    )
}
 
export default Success;