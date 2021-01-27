import React from 'react';

import Section from '../UI/Section/Section';
import DescriptionList from '../UI/DescriptionList/DescriptionList';
import { PROFESSIONAL_EXPERIENCE } from '../../containers/AskQuestions/QuestionsData';

import styles from './WorkExperience.module.css';

const workExperience = () => {
    return (
        <Section anchorId={ PROFESSIONAL_EXPERIENCE } heading="Work Experience">
            <div className={ styles.workExperience }>
                <DescriptionList 
                    title="Accenture (2018 - Present)"
                    list={[
                        "Worked with UX designers to implement chatbot and landing pages for our client.",
                        "Created and deployed a form framework that helped admins and business users to create forms easily for a variety of business needs.",
                        "Developed interfaces for the automation of site creation and deletion process.",
                        "Created a large scale file management system along with an easy to use interface for business users."
                    ]} />
            </div>
        </Section>
    );
};

export default workExperience;