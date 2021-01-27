import React from 'react';

import ProjectFrame from '../ProjectFrame/ProjectFrame';
import NonHostedProjects from '../NonHostedProjects/NonHostedProjects';
import Section from '../UI/Section/Section';

import styles from './ProjectCase.module.css';
import { PERSONAL_PROJECTS } from '../../containers/AskQuestions/QuestionsData';

export const projectData = [
    {
        title: "NeuralWorksNeat",
        description: `A web tool I first created in college to help students calculate neural network weights. 
        I had recently updated the user interface and converted the existing backend php script to act as a REST endpoint.`,
        repoUrl: "https://github.com/abhishekbane/neural-works-neat",
        webUrl: "https://abhishekbane.github.io/NeuralWorksNeat"
    }
];

const ProjectCase = () => {

    const projectCase = projectData.map( ( project, index ) => (
        <ProjectFrame 
            key={ index } 
            title={ project.title } 
            description={ project.description } 
            webUrl={ project.webUrl } repoUrl={ project.repoUrl } />
    ) );

    return (
        <Section anchorId={ PERSONAL_PROJECTS } heading="Personal websites">
            <div className={ styles.projectCaseContainer }>
                <div className={ styles.projectCase }>
                    {projectCase}
                </div>
                <NonHostedProjects />
            </div>
        </Section>
        
    );
};

export default ProjectCase;