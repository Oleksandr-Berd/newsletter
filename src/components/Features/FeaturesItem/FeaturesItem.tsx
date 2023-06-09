import { ReactComponent as CheckSVG } from "assets/images/check.svg"

import * as SC from './FeaturesItemStyled'

interface IProps {
    text: string;
}

const FeaturesItem: React.FC<IProps> = ({ text }) =>
(<SC.Item>
    <CheckSVG />
    <SC.Text>{text}</SC.Text>
</SC.Item>);


export default FeaturesItem;