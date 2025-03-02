import Card from 'react-bootstrap/Card'

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './styling/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare, faSquareGithub } from '@fortawesome/free-brands-svg-icons';





function Project({ proj }) {



    return (
        <>


            <div class="project-card">

                <div class="project-info">

                    <h4><a href={proj.link} target="_blank">
                        {proj.name}&nbsp;<FontAwesomeIcon icon={faLink} size="2xs" inverse></FontAwesomeIcon></a></h4>
                    <h5>{proj.role}</h5>
                    <p>
                        {proj.desc}
                    </p>

                    {proj.techs.map((tech, index) => (

                        <button key={index}>
                            {tech}
                        </button>
                    ))}

                    <a class="project-github-link" href={proj.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2xl" ></FontAwesomeIcon>
                    </a>

                </div>

                <div class="project-image">


                    <img src={proj.landingSrc}></img>

                </div>


            </div>



        </>




    );
}

export default Project;