import React, { useState } from 'react';

import ActiveHeader from '../../components/ActiveHeader/ActiveHeader';
import AskQuestions from '../AskQuestions/AskQuestions';

const BotLayout = ( props ) => {
    const [ selectedQuestion, setSelectedQuestion ] = useState({
        answer: `Hi! I am Abhishek. This is my portfolio.`
    });

    const onQuestionSelectedHandler = ( question ) => {
        console.log(question);
        setSelectedQuestion( question );
    };

    return (
        <div>
            <ActiveHeader botAnswer={ selectedQuestion.answer } />
            { props.children }
            <AskQuestions onQuestionSelected = { onQuestionSelectedHandler } />
        </div>
    );
};

export default BotLayout;