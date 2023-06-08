import { useMediaQuery } from '@mui/material';

import * as SC from "./HeaderStyled";

import background from "assets/images/backImageHeader.png"
import backgroundDesktop from "assets/images/backImageHeader.png"

const Header: React.FC = () => {
    const isDesktop = useMediaQuery('(min-width: 1440px)');

    const backgroundImage = isDesktop ? backgroundDesktop : background

    return <SC.Header >
        <SC.PicContainer pic={backgroundImage}></SC.PicContainer>
    </SC.Header>;
};

export default Header;
