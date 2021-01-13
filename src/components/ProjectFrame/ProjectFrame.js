import React from 'react';

import ProjectFrameFooter from './ProjectFrameFooter/ProjectFrameFooter';
import { curvedHaloYellow as CurvedHaloYellow } from '../UI/CurvedHaloFrame/CurvedHaloFrame';

import styles from './ProjectFrame.module.css';
import Paragraphs from '../UI/Paragraphs/Paragraphs';

const projectFrame = ( props ) => {
    return (
        <CurvedHaloYellow>
            <article className={ styles.projectFrame }>
                <div>
                    <h3 className={ styles.title }>{ props.title }</h3>
                    <Paragraphs>
                        { props.description }
                    </Paragraphs>
                </div>
                <ProjectFrameFooter webUrl={ props.webUrl } repoUrl={ props.repoUrl } />
            </article>
        </CurvedHaloYellow>
    );  
};

export default projectFrame;