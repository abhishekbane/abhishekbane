import React from 'react';

import Paragraphs from '../UI/Paragraphs/Paragraphs';
import { curvedHaloYellow as CurvedHaloFrame } from '../UI/CurvedHaloFrame/CurvedHaloFrame';

const answer = ( props ) => {

    const ans = props.answer ? props.answer : "";

    return (
        <CurvedHaloFrame disableHalo>
            <Paragraphs fontSize="1rem">
                { ans }
            </Paragraphs>
        </CurvedHaloFrame>
    );
};

export default answer;