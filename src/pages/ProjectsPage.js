/* ===== IMPORTS ===== */
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

/* ===== STYLES ===== */
import '../styles/pages/projectsPage.css'

/* ===== DISPLAY ===== */
function ProjectsPage() {
    return (
        <div style={{ width: '95%' }}>
            <h1 className='title' style={{ fontWeight: 'bold', letterSpacing: '2px' }}><span style={{ color: '#66C9FF' }}>LAB EXPE</span>RIMENTS</h1>

            <div>
                <div 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
                        gap: '15px',
                        marginBottom: '25px'
                    }}
                >

                    {/* RUBIK'S CUBE */}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ef5350';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(239, 83, 80, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            WEB GAME • REACT
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#ef5350',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            RUBIK'S CUBE
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            A simple cube you can play with (it has sounds!).
                        </div>
                        <div
                            className='project-item'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '150px'
                            }}
                        >
                            <a
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ef5350',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW PROJECT ✦
                            </a>
                            <a
                                href="https://gonoahwhere.com/cube"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ef5350',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ USE CUBE ✦
                            </a>
                        </div>
                    </div>

                    {/* TOASTOKU DISCORD BOT */}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ff9800';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 152, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            DISCORD BOT • JavaScript
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#ff9800',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            TOASTOKU
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            A Toast themed Sudoku bot. Handles game logic, validation and user interaction.
                        </div>
                        <div
                            className='project-item'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '150px'
                            }}
                        >
                            <a 
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ff9800',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW PROJECT ✦
                            </a>
                            <a 
                                href="https://discord.com/oauth2/authorize?client_id=1384180054984097975&permissions=51200&integration_type=0&scope=bot+applications.commands"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ff9800',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ INVITE ME ✦
                            </a>
                        </div>
                    </div>

                    {/* RUBIK'S CUBE DOCUMENTATION*/}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ffd700';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            DOCUMENTATION • REACT
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#ffd700',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            HOW TO RUBIK
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            Want to learn how to create the cube? Say no more!
                        </div>
                        <div
                            className='project-item'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '150px'
                            }}
                        >
                            <a 
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ffd700',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW PROJECT ✦
                            </a>
                            <a 
                                href="https://gonoahwhere.com/howtocube"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#ffd700',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW DOCS ✦
                            </a>
                        </div>
                    </div>

                    {/* RUBIK'S CUBE VISUALISER TRAINER */}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#7cb342';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 179, 66, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            WEB TOOL • REACT
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#7cb342',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            CUBE TRAINER
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            Want to learn how to solve the cube? Visually watch your own scramble be solved!
                        </div>
                        <div
                            className='project-item'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '150px'
                            }}
                        >
                            <a
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#7cb342',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW PROJECT ✦
                            </a>
                            <a 
                                href="https://gonoahwhere.com/cubetrainer"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#7cb342',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ LAUNCH ME ✦
                            </a>
                        </div>
                    </div>

                    {/* UNOAH DISCORD BOT */}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#52f3ff';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(82, 243, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            DISCORD BOT • TypeScript
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#52f3ff',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            UNOAH
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            Every card you draw was chosen to specifically ruin your life.
                        </div>
                        <div
                            className='project-item'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '150px'
                            }}
                        >
                            <a 
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#52f3ff',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ VIEW PROJECT ✦
                            </a>
                            <a 
                                href="https://github.com"
                                style={{
                                    fontSize: '0.8rem',
                                    color: '#52f3ff',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                ✦ INVITE ME ✦
                            </a>
                        </div>
                    </div>

                    {/* UNOAH PYTHON GAME*/}
                    <div
                        className='project-container'
                        style={{
                            background: '#1a1f3a',
                            border: '1px solid #2a3a5a',
                            borderRadius: '8px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#3d47ff';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(61, 71, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#2a3a5a';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div
                            className='project-item'
                            style={{
                                fontSize: '0.8rem',
                                opacity: 0.6,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            DESKTOP APP • Python
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '8px',
                                fontSize: '2.2rem',
                                color: '#3d47ff',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            UNOAH
                        </div>
                        <div
                            className='project-item'
                            style={{
                                marginBottom: '15px',
                                fontSize: '0.85rem',
                                color: '#ccc',
                                lineHeight: '1.5',
                            }}
                        >
                            Every card you draw was chosen to specifically ruin your life.
                        </div>
                        <a 
                            className='project-item'
                            href="https://github.com"
                            style={{
                                fontSize: '0.8rem',
                                color: '#3d47ff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                display: 'block'
                            }}
                        >
                            ✦ VIEW PROJECT ✦
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;