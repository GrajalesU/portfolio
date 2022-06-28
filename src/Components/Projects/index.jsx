import "./style.css"
import projectList from "./projects.json"
const Projects = () => {
    const {projects} = projectList
    return (
        <section className="projects" id="projects">
            <h2>Proyectos</h2>
            <div className="list_container">
                <ul className="project_list">
                    {
                        projects.map((project,id) =>
                            <li className="project_item" key={id}>
                                {project.img && <img src={project.img} alt="project" />}
                                <h3>{project.name}</h3>
                                <ul className="tecnologies">
                                    {project.tecnologies.map((tecnology, id) => <li key={id}>{tecnology}</li>)}
                                </ul>
                                <p>
                                    {project.description}
                                </p>
                                <a href={project.github} target="_blank" rel="external noreferrer">Ver en github</a>
                            </li> 
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default Projects