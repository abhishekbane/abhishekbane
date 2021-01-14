import React from 'react';

import { curvedHaloBlue as CurvedHaloBlue } from '../UI/CurvedHaloFrame/CurvedHaloFrame';
import { hyperlinkBlue as Hyperlink } from '../UI/Hyperlink/Hyperlink';

import { questionsData } from '../../containers/AskQuestions/QuestionsData';

import styles from './QuestionSelector.module.css';


const questionSelector = ( props ) => {
    const questions = questionsData.map( (question, index) => (
        <li 
            key = { index }
            onClick={ () => props.onQuestionSelected( question ) } 
            className={ styles.question }>
                <Hyperlink href={ "#" + question.id }>
                    { question.title }
                </Hyperlink>
        </li> 
    ));

    return (
        <CurvedHaloBlue disableHalo>
            <ul className={ styles.questionSelector }>
                { questions }
            </ul>
        </CurvedHaloBlue>
    );
};

export default questionSelector;