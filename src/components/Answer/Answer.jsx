import React from 'react';

import Paragraphs from '../UI/Paragraphs/Paragraphs';
import { curvedHaloYellow as CurvedHaloFrame } from '../UI/CurvedHaloFrame/CurvedHaloFrame';

import styles from './Answer.module.css';

const answer = ( props ) => {

    const ans = props.answer ? props.answer : "";

    return (
        <CurvedHaloFrame disableHalo>
            <Paragraphs>
                { ans }
            </Paragraphs>
        </CurvedHaloFrame>
    );
};

export default answer;