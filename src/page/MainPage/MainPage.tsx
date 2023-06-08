
import React, { useState } from 'react';
import * as SC from "./MainPageStyled"
import Features from 'components/Features/Features';
import FormSubmit from 'components/Form/Form';
import Modal from 'components/Modal/Modal';




const MainPage: React.FC = () => {
    const [data, setData] = useState<string>('');
    const [isShowModal, setIsShowModal] = useState(false)

    const handleSubmit = (value: { email:string}) => {
        const { email } = value

        console.log(email);
        
        setData(email)
        setIsShowModal(true)
    }

    const modalToggle = () => {
        setIsShowModal(false)
    }

    return (<SC.MainPage>
        <Features />
        <FormSubmit submit={handleSubmit} />
        {isShowModal && <Modal toggle={modalToggle} email={data} />}
    </SC.MainPage>);
}

export default MainPage;