import './styling/Projects.css'

import Project from './Project'

function Projects() {

    const project1 = {

        name: "geoJams",
        role: "Solo Developer",
        desc: "Data visualization website that allows users to explore music taste around the world.",
        landingSrc: "/images/geojams.JPG",
        link: "https://geo-jams.vercel.app/",
        github: "https://github.com/jamespieper/geoJams",
        techs: ["VanillaJS", "D3.js", "Spotify API"]

    }

    const project2 = {

        name: "Cookie Clicker",
        role: "Solo Developer",
        desc: "Online game website that allows users to accrue cookies, purchase upgrades, and complete with each other to climb the leaderboard.",
        landingSrc: "/images/cookie-clicker.JPG",
        link: "https://cookie-clicker-react-ten.vercel.app/",
        github: "https://github.com/jamespieper/CookieClickerReact",
        techs: ["React", "Node.js", "Firebase"]
    }

    const project3 = {

        name: "St. Ann Golf Course",
        role: "Solo Developer",
        desc: "A demo website for a local St. Louis golf course. Although not active, users can explore the layout of all 9 holes, book tee times, and find upcoming golf events.",
        landingSrc: "/images/st-ann.JPG",
        link: "https://github.com/jamespieper/st-ann-golf-course",
        github: "https://github.com/jamespieper/st-ann-golf-course",
        techs: ["Angular", "Express", "Node.js", "MongoDB"]
    }


    return (
        
        <>
            <div class="project-container">

                <h1 id="projects-title">PROJECTS</h1>


                <div class="project-list">

                    <div>
                        <Project proj={project1} />
                    </div>

                    <div>
                        <Project proj={project2} />
                    </div>

                    <div>
                        <Project proj={project3} />
                    </div>



                </div>



                <div class="curves">

                    <svg viewBox="0 0 1200 120">
                        <path class="shape-fill" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
                        </path>
                    </svg>

                </div>
            </div>
        </>
    );
}

export default Projects;