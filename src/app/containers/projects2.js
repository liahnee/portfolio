import React from 'react';

import ProjectList from '../components/projectList';
import '../stylesheets/projects2.css';

const data = require('../files/project_list.json');

export default () => {

    return (
        <div id="projects" >
            <h2 id="projects-container-title">My Projects</h2>
            <p id="projects-container-description"></p>
            <ProjectList data={data.fullStack} />
            <ProjectList data={data.frontEnd} /> 

        </div>
    )
}