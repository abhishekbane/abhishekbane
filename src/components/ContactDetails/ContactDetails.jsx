import React from 'react';

import Section from '../UI/Section/Section';

import styles from './ContactDetails.module.css';
import { CONTACT_DETAILS } from '../../containers/AskQuestions/QuestionsData';
import {paragraph as Paragraph } from '../UI/Paragraphs/Paragraphs';
import { hyperlinkYellow as Hyperlink } from '../UI/Hyperlink/Hyperlink';

const contactDetails = () => {
    return (
        <Section heading="Contact Details" anchorId = { CONTACT_DETAILS }>
            <address className={ styles.address }>
                <Paragraph margin="1rem 1.5rem 0.5rem 1.5rem" fontSize="1rem">
                    Name: <Hyperlink href="https://www.linkedin.com/in/abhishek-bane-012589b9/">Abhishek Bane</Hyperlink>
                </Paragraph>
                <Paragraph margin="0.5rem 1.5rem 1.5rem 1.5rem" fontSize="1rem">
                    Email: <Hyperlink href="mailto:abhishek.bane97@gmail.com">abhishek.bane97@gmail.com</Hyperlink>
                </Paragraph>
            </address>
        </Section>
    );
};

export default contactDetails;