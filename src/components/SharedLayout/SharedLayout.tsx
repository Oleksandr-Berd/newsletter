import { Outlet } from "react-router-dom";

import * as SC from  "./SharedlayoutStyled"

const SharedLayout = () => {
    return (<div>
        <Outlet/>
    </div> );
}
 
export default SharedLayout;