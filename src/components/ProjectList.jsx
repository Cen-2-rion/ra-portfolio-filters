import PropTypes from 'prop-types';

const ProjectList = ({projects}) => {
    return (
        <div className='projects'>
            {projects.map(project => (
                <div key={project}>
                    <img src={project.img} alt={project.category} />
                </div>
            ))}
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.isRequired,
}

export default ProjectList;
