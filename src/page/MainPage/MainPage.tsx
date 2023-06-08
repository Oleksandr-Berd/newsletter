
import React, { useState } from 'react';
import * as SC from "./MainPageStyled"
import Features from 'components/Features/Features';
import FormSubmit from 'components/Form/Form';
import Modal from 'components/Modal/Modal';


interface IProps {

}


const MainPage: React.FC<IProps> = () => {
    const [email, setEmail] = useState("")
    const [isShowModal, setIsShowModal] = useState(false)

    const handleSubmit = (value: string) => {
        setEmail(value)
        setIsShowModal(true)
    }

    const modalToggle = () => {
        setIsShowModal(false)
    }

    return (<SC.MainPage>
        <Features />
        <FormSubmit submit={handleSubmit} />
        {isShowModal && <Modal toggle={modalToggle} data={email} />}
    </SC.MainPage>);
}

export default MainPage;