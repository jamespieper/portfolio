import './styling/About.css'


function About() {

    const technologies = ["JAVA", "C++", "PYTHON", "JAVASCRIPT", "HTML/CSS", "TYPESCRIPT", "SQL",
        "ANGULAR", "REACT", "EXPRESS", "NODE.JS",
        "GIT", "MONGODB", "FIREBASE", "AWS", "D3.JS"]

    // const slider = document.getElementById("slide-track");

    // technologies.forEach((tech) => {
    //     const label = document.createElement("span");
    //     label.innerHTML = tech;
    //     label.className = "slide-item";
    //     slider.appendChild(label);
    // })

    

return (

    <>


        <div class="about-container">


            <div class="about-content">

                <div class="about-picture">
                    <img src="/images/james2.JPG" />
                </div>

                <div class="about-info">

                    <h3>Meet James</h3>

                    <p>Hello!
                        My name is James and I'm a recent graduate from Washington University in Saint Louis.
                        I earned a B.S. in Computer Science and developed a strong interest in full stack web development.
                        My strengths lie in front-end frameworks such as Angular and React and I have experience in back-end technologies including Express, SQL, and MongoDB.

                    </p>

                    <a href="/images/James_Pieper.pdf" target="_blank" >Resumé</a>

                </div>
            </div>

        </div>


        <body class="slider-container">
            <div class="slider">
                <div class="slide-track left" id="slide-track">
                    {technologies.map((tech, index) => (
                        <span key={index} className="slide-item">
                            {tech}
                        </span>

                    ))}
                </div>
            </div>
        </body>



    </>
)

}


export default About;