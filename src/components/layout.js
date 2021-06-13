import React,{Fragment} from 'react';
import Navbar from './navbar.js'


function LayoutComponent(props){
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    )
}

export default LayoutComponent;
