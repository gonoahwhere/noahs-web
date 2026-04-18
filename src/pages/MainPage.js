/* ===== IMPORTS ===== */
import { Helmet } from 'react-helmet';
import { SiJavascript, SiPython, SiReact } from 'react-icons/si';

/* ===== STYLES ===== */
import '../styles/pages/indexPage.css'

/* ===== FILES ===== */
import { FaCode, FaRocket, FaHeart } from '../utils/indexSymbols.js';
import projects from '../utils/indexInfo.js';
import NoahLogo from '../images/noah.jpg'
import { calculateAge } from '../scripts/calculateAge.js';

/* ===== DISPLAY ===== */
function MainPage() {
    const age = calculateAge('2002-08-21');
    const currentYear = new Date().getFullYear();
    const yearsCoding = currentYear - 2014;


    return (
        <>
            <Helmet>
                <title>Home • gonoahwhere</title>
            </Helmet>

            <div className='home-page'>
                <div className='profile-header-card'>
                    <div className='profile-header-pic-section'>
                        <div className='profile-header-pic'>
                            <img src={NoahLogo} alt='Noah' />
                        </div>
                        <div className='profile-header-badge'>
                            <FaCode />
                            <span>Developer</span>
                        </div>
                        <h2>NOAH</h2>
                    </div>

                    <div className='profile-header-info-section'>
                        <h2>NOAH</h2>
                        <p className='profile-header-info-tagline'>
                            Self Taught Developer | Software Engineering Student
                        </p>

                        <div className='profile-header-info-stats'>
                            <div className='profile-header-info-stat-item'>
                                <span className='profile-header-info-stat-age'>{age}</span>
                                <span className='profile-header-info-stat-label'>Years Old</span>
                            </div>

                            <div className='profile-header-info-stat-item'>
                                <span className='profile-header-info-stat-age'>{yearsCoding}</span>
                                <span className='profile-header-info-stat-label'>Years Coding</span>
                            </div>

                            <div className='profile-header-info-stat-item'>
                                <span className='profile-header-info-stat-age'>{projects.length}</span>
                                <span className='profile-header-info-stat-label'>Projects</span>        
                            </div>
                        </div>
                    </div>
                </div>

                <div className='info-cards-grid'>
                    <div className='info-card journey-card'>
                        <div className='card-icon'>
                            <FaRocket />
                        </div>
                        <h3>MY JOURNEY</h3>
                        <p>
                            As a self taught developer (no expert here, just passionate!), my programming adventure began at the age of 12 and 
                            since then it has blossomed into a deep passion. I've dedicated countless hours learning and refining my craft, 
                            working on everything from solo projects to collaborations with fellow programmers on bug fixes, code rewrites and
                            some amazing little projects.
                        </p>
                        <p>
                            When I'm not coding, I enjoy playing video games, exploring new tech and diving into
                            personal side projects.
                        </p>
                    </div>

                    <div className='info-card skills-card'>
                        <div className='card-icon'>
                            <FaCode />
                        </div>
                        <h3>LANGUAGES</h3>
                        <p>
                            Javascript is my main language and the one I'm most confident with, used across a variety of projects including a 
                            Discord Sudoku Bot where I handle game logic, validation and user interaction.
                        </p>
                        <p>
                            I also use React for front end projects, most notably building a fully functional Rubik's Cube, this helped me 
                            understand component based structures, state management and handling more complex interactive logic.
                        </p>
                        <p>
                            I've been spending more time with Python and C++ for smaller projects such as a Desktop version of the 
                            Discord Sudoku Bot, a Noughts & Crosses game and a functional calendar.
                        </p>
                    </div>

                    <div className='info-card passion-card'>
                        <div className='card-icon'>
                            <FaHeart />
                        </div>
                        <h3>FAVOURITE PROJECTS</h3>
                        <div className='projects-container'>
                            <div className='project-item'>
                                <strong>Toastoku Discord Bot: </strong>
                                <SiJavascript color='#f7df1e' style={{ verticalAlign: 'middle', marginLeft: '0.3rem', filter: 'drop-shadow(0 0 2px #000)' }} />
                                <p>A Toast themed Sudoku bot in Discord. Handles game logic, validation, and user interaction.</p>
                            </div>

                            <div className='project-item'>
                                <strong>UNOAH: </strong> 
                                <SiPython color='#3776ab' style={{ verticalAlign: 'middle', marginLeft: '0.3rem', filter: 'drop-shadow(0 0 2px #000)' }} />
                                <p>Every card you draw was chosen to specifically ruin your life.</p>
                            </div>

                            <div className='project-item'>
                                <strong>Basic Rubik's Cube: </strong>
                                <SiReact color='#61dafb' style={{ verticalAlign: 'middle', marginLeft: '0.3rem', filter: 'drop-shadow(0 0 2px #000)' }} />
                                <p>A simple 3x3 Rubik's cube with shuffle/solve controls, keyboard/button input and sound effects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default MainPage;