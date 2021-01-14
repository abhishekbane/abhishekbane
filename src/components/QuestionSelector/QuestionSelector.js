import React from 'react';

import { curvedHaloBlue as CurvedHaloBlue } from '../UI/CurvedHaloFrame/CurvedHaloFrame';

import { questionsData } from '../../containers/AskQuestions/QuestionsData';

import styles from './QuestionSelector.module.css';


const questionSelector = ( props ) => {
    const questions = questionsData.map( question => (
        <li 
            onClick={ () => props.onQuestionSelected( question ) } 
            className={ styles.question }>
            { question.title }
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