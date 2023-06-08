
import React from 'react';
import * as SC from "./MainPageStyled"
import Features from 'components/Features/Features';
import FormSubmit from 'components/Form/Form';


interface IProps{
    handleSubmit:Function
}

const MainPage: React.FC<IProps> = ({handleSubmit}) => {
   
    return (<SC.MainPage>
        <Features />
        <FormSubmit submit={handleSubmit} />
    </SC.MainPage>);
}

export default MainPage;