import React, { useState } from 'react';
import allProjects from 'data/projectsData';
import ProjectCard from '../components/ProjectCard';
import Dropdown from '../components/Dropdown';

const ProjectShowcase = () => {
    const options = ['Top Voted', 'Recently added', 'Featured']

    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="md:px-60 p-2 text-center">
            <h2 className="text-3xl font-bold text-gray-600 font-sans m-8">Showcase</h2>

            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
            <div>
                {
                    allProjects.map(project => {
                        return <ProjectCard project={project} />

                    })
                }
            </div>
        </div>
    );
}

export default ProjectShowcase;