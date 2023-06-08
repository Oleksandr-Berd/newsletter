
import React, { useState } from 'react';
import * as SC from "./MainPageStyled"
import Features from 'components/Features/Features';
import FormSubmit from 'components/Form/Form';

interface IProps {
   
}

interface IState{
    email:string
}

const MainPage: React.FC<IProps> = () => {
const [email, setEmail] = useState("")

    const handleSubmit = (value:string) => {
        setEmail(value)
}
    console.log(email);
    
    
    return (<SC.MainPage><Features /><FormSubmit submit={handleSubmit} /></SC.MainPage>);
}

export default MainPage;