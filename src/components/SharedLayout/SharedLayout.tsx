import { Outlet } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { useMediaQuery } from '@mui/material';

import * as SC from "./SharedLayoutStyled";

import { Suspense } from "react";
import Header from "../Header/Header";


const SharedLayout = () => {

    const isDesktop = useMediaQuery('(min-width: 1440px)');

    return (
        <SC.SharedLayout>
            {!isDesktop && <Header />}
            <Suspense fallback={<Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />}>
                <Outlet />
            </Suspense>
        </SC.SharedLayout>
)
    
}

export default SharedLayout;

