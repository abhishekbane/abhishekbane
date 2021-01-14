import React from 'react';

import { hyperlinkYellow as Hyperlink } from '../../UI/Hyperlink/Hyperlink';

import styles from './ProjectFrameFooter.module.css';

const projectFrameFooter = (props) => {
    return (
        <div className={ styles.projectFrameFooter }>
            <Hyperlink href={ props.webUrl } target="_blank" >
                Website
            </Hyperlink>
            <Hyperlink href={ props.repoUrl } target="_blank">
                Github
            </Hyperlink>
        </div>
    );
};  

export default projectFrameFooter;