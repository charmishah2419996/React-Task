import React from 'react'
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';

const layout = ( props ) => (
            <>
            <div>side bar toolbar </div>
            <main className={Classes.content}>{props.children}</main>
            </>
);

export default layout;
