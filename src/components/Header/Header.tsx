import * as SC from "./HeaderStyled";

import background from "assets/images/backImageHeader.png"

const Header: React.FC = () => {
    return <SC.Header>
        <SC.PicContainer pic={background}></SC.PicContainer>
    </SC.Header>;
};

export default Header;
