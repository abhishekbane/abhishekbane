import React from 'react';

import Section from '../UI/Section/Section';
import DescriptionList from '../UI/DescriptionList/DescriptionList';

import { SKILLS } from '../../containers/AskQuestions/QuestionsData';

import styles from './Skills.module.css';

const skills = ( props ) => {
    return (
        <Section anchorId={ SKILLS } heading="Skills">
            <div className={ styles.skills }>
                <DescriptionList
                    title="Programming and Technologies"
                    list={[
                        "Javascript",
                        "Typescript",
                        "React.JS",
                        "Redux",
                        "SASS",
                        "Azure Function",
                        "GraphQL"
                    ]} />
            </div>
        </Section>
    );
};

export default skills;