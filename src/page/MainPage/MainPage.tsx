import React from 'react';
import { useMediaQuery } from '@mui/material';

import * as SC from "./MainPageStyled"
import Features from 'components/Features/Features';
import FormSubmit from 'components/Form/Form';
import Header from 'components/Header/Header';


interface IProps {
    handleSubmit: Function
}

const MainPage: React.FC<IProps> = ({ handleSubmit }) => {

    const isDesktop = useMediaQuery('(min-width: 1440px)');

    return (<SC.MainPage>
        {isDesktop ? <>
            <SC.DeskContainer><Features />
                <FormSubmit submit={handleSubmit} /></SC.DeskContainer>
            <Header />
        </> : <> <Features />
            <FormSubmit submit={handleSubmit} /></>}

    </SC.MainPage>);
}

export default MainPage;