import React from 'react';

import ActiveHeader from '../../components/ActiveHeader/ActiveHeader';
import ProjectCase from '../ProjectCase/ProjectCase';

import AskQuestions from '../AskQuestions/AskQuestions';

const Layout = () => {
    return (
        <div>
            <ActiveHeader />
            <ProjectCase />
            <AskQuestions />
        </div>
    );
};

export default Layout;