import {useState} from 'react';
import ProjectList from './ProjectList';
import projects from './Projects';
import Toolbar from './Toolbar';

const Portfolio = () => {
    const [selected, setSelected] = useState('All');

    const filteredProjects = (selected === 'All') ? projects : projects.filter(project => project.category === selected);

    return (
        <div className='portfolio'>
            <Toolbar
                filters={['All', 'Websites', 'Flayers', 'Business Cards']}
                selected={selected}
                onSelectFilter={setSelected}
            />
            <ProjectList projects={filteredProjects} />
        </div>
    );
}

export default Portfolio;
