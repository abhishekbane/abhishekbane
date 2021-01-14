import React from 'react';

import BotLayout from '../BotLayout/BotLayout';
import ProjectCase from '../ProjectCase/ProjectCase';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

const Layout = () => {
    return (
        <BotLayout>
            <ProjectCase />
            <WorkExperience />
        </BotLayout>
    );
};

export default Layout;