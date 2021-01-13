import React, { useState, useCallback } from 'react';

import AskButton from '../../components/AskButton/AskButton';
import QuestionSelector from '../../components/QuestionSelector/QuestionSelector';

import styles from './AskQuestions.module.css';

const AskQuestions = () => {

    const [ isSelectorVisible, setIsSelectorVisible ] = useState(false);

    const questionSelector = isSelectorVisible ? <QuestionSelector /> : null;

    const onAskButtonClick = (event) => {
        event.stopPropagation();
        setIsSelectorVisible((prevState) => !prevState);
    };

    useCallback( document.getElementsByTagName("body")[0].addEventListener( "click", () => {
        setIsSelectorVisible(false);
    } ));

    return (
        <div>
            <div className={ styles.placeholder }></div>
            <div className={ styles.askQuestionBar }>
                { questionSelector }
                <div className={ styles.barBackground }>
                    <AskButton isHaloVisible={ isSelectorVisible } onClick={ onAskButtonClick } size="2.5rem" />
                </div>
            </div>
        </div>
    );
};

export default AskQuestions;