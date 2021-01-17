import React from 'react';

import Section from '../UI/Section/Section';

import styles from './ContactDetails.module.css';
import { CONTACT_DETAILS } from '../../containers/AskQuestions/QuestionsData';
import {paragraph as Paragraph } from '../UI/Paragraphs/Paragraphs';

const contactDetails = () => {
    return (
        <Section heading="Contact Details" anchorId = { CONTACT_DETAILS }>
            <address className={ styles.address }>
                <Paragraph margin="0" fontSize="1rem">Name: Abhishek Bane</Paragraph>
                <Paragraph margin="0" fontSize="1rem">
                    Email: <a href="mailto:abhishek.bane97@gmail.com">abhishek.bane97@gmail.com</a>
                </Paragraph>
                <Paragraph margin="0" fontSize="1rem">
                    Linkedin: <a href="https://www.linkedin.com/in/abhishek-bane-012589b9/">linkedin.com/in/abhishek-bane-012589b9</a>
                </Paragraph>
            </address>
        </Section>
    );
};

export default contactDetails;