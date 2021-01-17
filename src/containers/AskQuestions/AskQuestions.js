import React, { useState, useEffect } from 'react';

import AskButton from '../../components/AskButton/AskButton';
import QuestionSelector from '../../components/QuestionSelector/QuestionSelector';

import styles from './AskQuestions.module.css';

const AskQuestions = ( props ) => {

    const [ isSelectorVisible, setIsSelectorVisible ] = useState(false);

    const onAskButtonClickHandler = (event) => {
        event.stopPropagation();
        setIsSelectorVisible((prevState) => !prevState);
    };

    const questionSelector = isSelectorVisible ? <QuestionSelector onQuestionSelected={ props.onQuestionSelected } /> : null;

    useEffect( () => document.getElementsByTagName("body")[0].addEventListener( "click", () => {
        setIsSelectorVisible(false);
    } ), []);

    return (
        <div>
            <div className={ styles.placeholder }></div>
            <div className={ styles.askQuestionBar }>
                { questionSelector }
                <div className={ styles.barBackground }>
                    <AskButton isHaloVisible={ isSelectorVisible } onClick={ onAskButtonClickHandler } size="2rem" />
                </div>
            </div>
        </div>
    );
};

export default AskQuestions;