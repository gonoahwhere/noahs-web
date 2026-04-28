/* ===== IMPORTS ===== */
import { useState } from 'react';

/* ===== DATA ===== */
const todoData = {
    bot: {
        issues: [
            "Cast number from set",
            "Leave old game button not finding games",
            "Leaderboard command not working",
            "Remove 'alt' from mobile profile images",
            "Vote reminders not working"
        ],
        needtoadd: [
            "Vote reminders",
            "Weekly quest reminders",
            "Daily puzzle reminders",
            "Block/unblock users from joining multiplayer games",
            "Notification system for new changes/updates?",
            "Boosters for improving game speed",
            "Badges for completing different requirements",
            "Server booster rewards for Community Discord Server",
            "Achievement system",
            "Custom themes for Sudoku games",
            "Ability to track used hints",
            "Community goals in the Community Discord Server",
            "Add achievable titles"
        ],
        changes: [
            "Vote webhook to use new one",
            "Leaderboard command to use choices rather than menu",
            "Changelog command redirects to dashboard",
        ]
    },

    dashboard: {
        issues: [
            "Leaderboards not correctly showing stats/anonymous mode",
        ],
        needtoadd: [
            "Server settings for server managers",
            "User settings for users",
            "Config settings for users",
            "Badges menu that allows users to pick badges to equip",
            "Achievement menu displaying progress/ahcieved/not achieved",
            "Theme menu displaying unlocked themes/locked themes/free themes",
            "Stat menu displaying last 10 games including puzzle information/image",
            "Boosts menu displaying how much toast a user has/each boost with description, price, total user has, total remaining each week and ability to purchase",
            "Community Goal menu displaying the goal, total completion/remaining, how many users participating, reward",
            "Add titles to profile menu",
            "Add a title page displaying a list of all titles, achieved titles, unobtained titles/requirements to unlock",
            "Add a help menu displaying each section of the dashboard/help menu from Discord Bot"
        ],
        page: [
            "Changelogs needs mobile responsitivity",
            "Commands needs mobile responsitivity",
            "Dashboard login needs mobile responsitivity",
            "Leaderboard needs mobile responsitivity",
            "Profile needs mobile responsitivity",
            "Quests needs mobile responsitivity",
            "User needs mobile responsitivity",
            "User settings needs mobile responsitivity",
        ]
    },

    website: {
        issues: [
            "Convert API/Discord Auth to domain",
        ],
        needtoadd: [
            "How to Rubik page",
            "Terms of Service page for Toastoku",
            "Policy page for Toastoku",
            "Rubiks Cube page",
            "UNOAH page",
            "UNOAH Dashboard"
        ],
        changes: [
            "Add more detail, comments, make the how to documentation more beginner friendly",
        ],
        page: [
            "Rubiks Cube needs mobile responsitivity",
            "How to Rubik may need adjusting for mobile responsitivity",
            "Projects needs mobile responsitivity",
        ]
    }
};

const sectionConfig = {
    issues: { title: "Known Issues", color: "#FF4D4D" },
    needtoadd: { title: "Need to Add", color: "#FFD700" },
    changes: { title: "Changes Needed", color: "#1E90FF" },
    page: { title: "Page Issues", color: "#FF4D4D" },
}

/* ===== UTILITY FUNCTIONS ===== */
function parseStrikethrough(text) {
    const isStrikethrough = text.startsWith("~~") && text.endsWith("~~");
    const content = isStrikethrough ? text.slice(2, -2) : text;
    return { content, isStrikethrough };
}

function countActiveItems(items) {
    return items.filter(item => !item.startsWith("~~")).length;
}

/* ===== PAGE ===== */
function ToDoPage() {
    const [activeTab, setActiveTab] = useState('bot');

    return (
        <div style={styles.pageContainer}>
            
            {/* TABS */}
            <div style={styles.tabContainer}>
                {['bot', 'dashboard', 'website'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            ...styles.tab,
                            ...(activeTab === tab ? styles.tabActive : styles.tabInactive)
                        }}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* CONTENT */}
            <div style={styles.container}>
                {Object.entries(todoData[activeTab]).map(([sectionKey, items]) => {
                    const config = sectionConfig[sectionKey];
                    if (!config || items.length === 0) return null;

                    const activeCount = countActiveItems(items);

                    return (
                        <div 
                            key={sectionKey} 
                            style={styles.card}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#00D4FF';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#66C9FF33';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(102, 201, 255, 0.1)';
                            }}
                        >
                            <div style={styles.header}>
                                <h2 style={{...styles.version, color: config.color}}>{config.title}</h2>
                                <span style={styles.date}>
                                    {activeCount} remaining
                                </span>
                            </div>

                            <ul style={styles.list}>
                                {items.map((item, i) => {
                                    const { content, isStrikethrough } = parseStrikethrough(item);
                                    return (
                                        <li 
                                            key={i} 
                                            style={{
                                                ...styles.item,
                                                ...(isStrikethrough ? styles.strikethrough : {})
                                            }}
                                        >
                                            {content}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ===== STYLES ===== */
const styles = {
    pageContainer: {
        padding: '20px',
        width: '95%'
    },

    pageTitle: {
        color: '#00D4FF',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom: '30px'
    },

    tabContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        justifyContent: 'center'
    },

    tab: {
        padding: '10px 20px',
        borderRadius: '8px',
        border: '1px solid #66C9FF33',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    tabActive: {
        background: 'linear-gradient(135deg, #00D4FF33 0%, #1E90FF33 100%)',
        color: '#00D4FF',
        borderColor: '#00D4FF',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    tabInactive: {
        background: 'transparent',
        color: '#999',
        borderColor: '#66C9FF33',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%'
    },

    card: {
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%)',
        border: '1px solid #66C9FF33',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 30px rgba(102, 201, 255, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative'
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        alignItems: 'center'
    },

    version: {
        color: '#00D4FF',
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize: '18px'
    },

    date: {
        color: '#ccc',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
    },

    list: {
        margin: 0,
        paddingLeft: '18px'
    },

    item: {
        color: '#ccc',
        marginBottom: '8px',
        transition: 'all 0.2s ease',
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    strikethrough: {
        textDecoration: 'line-through',
        color: '#666',
        opacity: 0.6
    }
};

export default ToDoPage;
