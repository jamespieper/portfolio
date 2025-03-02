
import './styling/Home.css'

import About from './About'

import Projects from './Projects'

import Contact from './Contact'

import Typewriter from 'typewriter-effect';


function Home() {






    return (

        <>

            <div class="intro">
                <video src='/videos/globe.mp4' autoPlay loop></video>


                <div class="top-left">
                    <a href="#">
                        JP.
                    </a>
                </div>

                <div class="top-right">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div class="centered">
                    <h1>Hello, I'm <span>James.</span></h1>

                    <div class="flexstuff">
                        <h2>I'm a&nbsp;</h2>

                        <h2>
                            <Typewriter
                                options={{
                                    strings: ['full stack developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>

                    </div>







                    <a href="#projects">
                        <button>VIEW MY WORK</button>
                    </a>

                </div>
            </div>

            <div id="about">
                <About />
            </div>

            <div id="projects">
                <Projects />
            </div>

            <div id="contact">
                <Contact />
            </div>






        </>
    );


}

export default Home;