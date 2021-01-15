import React from 'react';

import BotLayout from '../BotLayout/BotLayout';
import ProjectCase from '../ProjectCase/ProjectCase';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Skills from '../../components/Skills/Skills';

const Layout = () => {
    return (
        <BotLayout>
            <ProjectCase />
            <WorkExperience />
            <Skills />
        </BotLayout>
    );
};

export default Layout;