import React from 'react';
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import {Outlet} from "react-router";


const Template = () => {
    return (
        <>
            <MyHeader/>
            <div style={{paddingTop: '48px', paddingBottom: '48px'}}>
                <Outlet/>
            </div>
            <MyFooter/>
        </>
    );
};


export default Template;