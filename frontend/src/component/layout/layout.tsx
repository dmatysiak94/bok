import React, {Fragment} from "react";
import MainNavigation from "./main-navigation";

const Layout : React.FC = (props) => {
    return(
        <Fragment>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;