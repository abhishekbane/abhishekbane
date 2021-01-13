import React from 'react';

import ProjectFrame from '../../components/ProjectFrame/ProjectFrame';
import NonHostedProjects from '../../components/NonHostedProjects/NonHostedProjects';

import styles from './ProjectCase.module.css';

export const projectData = [
    {
        title: "NeuralWorksNeat",
        description: `A web tool I first created in college to help students calculate neural network weights. 
        I had recently updated the user interface and also converted the backend php script to act as a REST endpoint.`,
        repoUrl: "https://github.com/abhishekbane/neural-works-neat",
        webUrl: "https://abhishekbane.github.io/NeuralWorksNeat"
    },
    {
        title: "Bright Shine",
        description: `A web app`,
        repoUrl: "https://github.com/abhishekbane/neural-works-neat",
        webUrl: "https://abhishekbane.github.io/NeuralWorksNeat"
    },
    {
        title: "Bright Shine",
        description: `A web app`,
        repoUrl: "https://github.com/abhishekbane/neural-works-neat",
        webUrl: "https://abhishekbane.github.io/NeuralWorksNeat"
    },
    {
        title: "Bright Shine",
        description: `A web app`,
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
        <div className={ styles.projectCase }>
            {projectCase}
            <NonHostedProjects />
        </div>
    );
};

export default ProjectCase;