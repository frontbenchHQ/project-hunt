import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Dropdown from '../components/Dropdown';
import loaderIcon from 'assets/images/loader.svg';
import { getAllProjects } from 'utils/api';


const ProjectShowcase = () => {
    const options = ['Top Voted', 'Recently added', 'Featured']

    const [selected, setSelected] = useState(options[0]);
    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllProjects()
            .then(res => {
                setAllProjects(res.data.projects)
                setLoading(false);
            })

    }, [])

    const showLoading = () => {
        return (
            <div className=" py-20 mb-40">
                <img src={loaderIcon} alt="loading" className="w-14 mb-4 mx-auto transform animate-spin rotate-180" />
                <h1 className="md:text-xl text-lg">
                    Curating Projects for you
                </h1>
            </div>
        )
    }

    return (
        <div className="md:px-60 p-2 text-center">
            <h2 className="text-3xl font-bold text-gray-600 font-sans m-8">Showcase</h2>

            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
            <div className="flex flex-row flex-wrap justify-center">
                {loading ? showLoading() :
                    allProjects.map(project => {
                        return (
                            <div className="m-2 md:w-2/5">
                                <ProjectCard project={project} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProjectShowcase;