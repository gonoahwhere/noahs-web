/* ===== IMPORTS ===== */
import { useState } from 'react';

/* ===== COMMANDS ===== */

const COMMANDS = [
    {
        title: '/changelogs',
        description: 'View the most recent changes for Toastoku.',
        color: '#FF1744',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/changelogs', command: '/changelogs'},
        ]
    },
    {
        title: '/config',
        description: 'Edit or view your current game configuration.',
        color: '#EF5350',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/config edit', command: '/config edit'},
            {label: '/config view', command: '/config view'},
        ]
    },
    {
        title: '/daily',
        description: 'Fancy a go at the daily puzzle?',
        color: '#FF6E40',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/daily', command: '/daily'},
        ]
    },
    {
        title: '/help',
        description: 'Your guide to all things Toastoku.',
        color: '#FF9800',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/help', command: '/help'},
        ]
    },
    {
        title: '/hint',
        description: 'Fill a hint in your current Sudoku game.',
        color: '#FFD700',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/hint', command: '/hint'},
        ]
    },
    {
        title: '/leaderboard',
        description: 'View the richest users across Toastoku!',
        color: '#76FF03',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/leaderboard', command: '/leaderboard'},
        ]
    },
    {
        title: '/profile',
        description: 'View your bots profile!',
        color: '#81C784',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/profile', command: '/profile'},
        ]
    },
    {
        title: '/server-settings',
        description: 'Edit or view your server settings.',
        color: '#26C6DA',
        permission: 'Manage Guild',
        requiredArgs: ['None'],
        codes: [
            {label: '/server-settings edit', command: '/server-settings edit'},
            {label: '/server-settings view', command: '/server-settings view'},
        ]
    },
    {
        title: '/settings',
        description: 'Edit or view your current bot settings.',
        color: '#66C9FF',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/settings edit', command: '/settings edit'},
            {label: '/settings view', command: '/settings view'},
        ]
    },
    {
        title: '/stats',
        description: 'View your last 10 sudoku games!',
        color: '#00B0FF',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/stats', command: '/stats'},
        ]
    },
    {
        title: '/sudoku play',
        description: 'Generate a new Sudoku puzzle.',
        color: '#7C4DFF',
        permission: 'Everyone',
        requiredArgs: ['difficulty', 'theme', 'mode'],
        codes: [
            {label: '/sudoku play', command: '/sudoku play difficulty:Easy theme:Toastie mode:Singleplayer'},
        ]
    },
    {
        title: '/topgg',
        description: 'Post stats to topgg.',
        color: '#D500F9',
        permission: 'Bot Owner',
        requiredArgs: ['None'],
        codes: [
            {label: '/topgg', command: '/topgg'},
        ]
    },
    {
        title: '/weekly-quests',
        description: 'View this weeks quests!',
        color: '#CE93D8',
        permission: 'Everyone',
        requiredArgs: ['None'],
        codes: [
            {label: '/weekly-quests', command: '/weekly-quests'},
        ]
    },
];

function CommandCard({ command }) {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div
            className="command-card"
            style={{
                background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%',
                border: `1px solid #2a3a5a`,
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = command.color;
                e.currentTarget.style.boxShadow = `0 0 15px ${command.color}4d`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a3a5a';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >

            {/* TITLE */}
            <div
                style={{
                    marginBottom: '8px',
                    fontSize: '1.3rem',
                    color: command.color,
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
            >
                {command.title}
            </div>

            {/* DESCRIPTION */}
            <div
                style={{
                    marginBottom: '15px',
                    fontSize: '0.85rem',
                    color: '#ccc',
                    lineHeight: '1.5',
                    textTransform: 'uppercase',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                    letterSpacing: '1px'
                }}
            >
                {command.description}
            </div>

            {/* CONTENT */}
            <div
                style={{
                    borderTop: `1px solid ${command.color}33`,
                    paddingTop: '15px',
                    textAlign: 'left'
                }}
            >
                {/* PERMISSIONS */}
                <div
                    style={{
                        marginBottom: '25px'
                    }}
                >
                    <div
                        style={{
                            fontSize: '0.7rem',
                            opacity: 0.6,
                            marginBottom: '6px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                            color: command.color
                        }}
                    >
                        PERMISSION
                    </div>
                    <div
                        style={{
                            padding: '8px 10px',
                            background: '#0a0a0a',
                            border: `1px solid ${command.color}66`,
                            borderRadius: '4px',
                            color: command.color,
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                        }}
                    >
                        {command.permission}
                    </div>
                </div>

                {/* ARGUMENTS */}
                {command.requiredArgs.length > 0 && (
                    <div
                        style={{
                            marginBottom: '25px'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '0.7rem',
                                opacity: 0.6,
                                marginBottom: '6px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                color: command.color
                            }}
                        >
                           REQUIRED ARGUMENTS
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '6px',
                                flexWrap: 'wrap'
                            }}
                        >
                            {command.requiredArgs.map((arg, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '6px 10px',
                                        background: '#0a0a0a',
                                        border: `1px solid ${command.color}66`,
                                        borderRadius: '4px',
                                        color: command.color,
                                        fontSize: '0.75rem',
                                        fontFamily: 'monospace',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {arg}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* USAGE */}
                {command.codes.length > 0 && (
                    <div>
                        <div
                            style={{
                                fontSize: '0.7rem',
                                opacity: 0.6,
                                marginBottom: '6px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                color: command.color
                            }}
                        >
                            USAGE
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px'
                            }}
                        >
                            {command.codes.map((code, idx) => (
                                <code
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(code.command);
                                    }}
                                    style={{
                                        display: 'block',
                                        padding: '8px 10px',
                                        background: '#0a0a0a',
                                        border: `1px solid ${command.color}66`,
                                        borderRadius: '4px',
                                        color: command.color,
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        userSelect: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = command.color + '11';
                                        e.currentTarget.style.borderColor = command.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#0a0a0a';
                                        e.currentTarget.style.borderColor = command.color + '66';
                                    }}
                                >
                                    {code.label}
                                    {copied === code.command && (
                                        <span
                                            style={{
                                                marginLeft: '8px',
                                                fontSize: '0.7rem',
                                                opacity: 0.8,
                                                color: '#81C784'
                                            }}
                                        >
                                            ✓ COPIED
                                        </span>
                                    )}
                                </code>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default function CommandsPage() {
    return (
        <div
            style={{
                width: '95%'
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
                    gap: '15px',
                    marginBottom: '25px'
                }}
            >
                {COMMANDS.map((command, idx) => (
                    <CommandCard key={idx} command={command} />
                ))}
            </div>
        </div>
    )
}