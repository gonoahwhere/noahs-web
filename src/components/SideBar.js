/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react';

/* ===== HELPER FUNCTIONS ===== */
const formatNumber = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};

/* ===== SIDEBAR ===== */
function SidebarComponent({ activeNav, setActiveNav }) {
    const [stats, setStats] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://www.gonoahwhere.com/api/stats')
            .then(res => res.json())
            .then(data => setStats(data[0]))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!stats) return <p>Loading dashboard…</p>;

    const handleNavClick = (section) => {
        setActiveNav(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside
            style={{
                top: '20px',
                width: '260px',
                minWidth: '260px',
                maxHeight: 'calc(100vh - 40px)',
                background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%)',
                border: '2px solid #66C9FF33',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 20px',
                boxSizing: 'border-box',
                zIndex: 1000,
                boxShadow: '0 0 40px rgba(102, 201, 255, 0.15)'
            }}
        >
            {/* HEADER */}
            <div style={styles.sidebarHeader}>
                <h1 style={styles.sidebarTitle}>
                    <span style={{ color: '#0099FF' }}>T</span>
                    <span style={{ color: '#00BFFF' }}>O</span>
                    <span style={{ color: '#1E90FF' }}>A</span>
                    <span style={{ color: '#66C9FF' }}>S</span>
                    <span style={{ color: '#00D4FF' }}>T</span>
                    <span style={{ color: '#4DB8FF' }}>O</span>
                    <span style={{ color: '#00CCFF' }}>K</span>
                    <span style={{ color: '#33B5FF' }}>U</span>
                </h1>
            </div>

            {/* NAVIGATION */}
            <div
                style={{
                    fontSize: '0.7rem',
                    opacity: 0.6,
                    paddingTop: '24px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color: '#66C9FF',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                TOASTOKU SECTIONS
            </div>
            <nav style={styles.nav}>
                {[
                    { id: 'changelogs', label: 'Changelogs', color: '#66C9FF' },
                    { id: 'commands', label: 'Commands', color: '#00D4FF' },
                    { id: 'quests', label: 'Quests', color: '#1E90FF' },
                    { id: 'leaderboard', label: 'Leaderboard', color: '#0099FF' },
                    { id: 'profile', label: 'Profile', color: '#64B5F6' },
                    { id: 'user', label: 'User', color: '#64B5F6' },
                    { id: 'settings', label: 'Settings', color: '#4DB8FF' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        style={{
                            ...styles.navItem,
                            borderColor: activeNav === item.id ? item.color : 'transparent',
                            boxShadow: activeNav === item.id ? `0 0 15px ${item.color}66` : 'none',
                            color: activeNav === item.id ? item.color: '#ccc'
                        }}
                        onMouseEnter={(e) => {
                            if (activeNav !== item.id) {
                                e.currentTarget.style.color = item.color;
                                e.currentTarget.style.boxShadow = `0 0 15px ${item.color}33`;
                                e.currentTarget.style.borderColor = item.color;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeNav !== item.id) {
                                e.currentTarget.style.color = '#ccc';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'transparent';
                            }
                        }}
                    >
                        {item.label}
                        {activeNav === item.id && (
                            <span style={{ marginLeft: '8px', fontSize: '12px' }}>▸</span>
                        )}
                    </button>
                ))}
            </nav>

            {/* TOASTOKU STATS */}
            <div style={styles.sidebarFooter}>
                <div
                    style={{
                        fontSize: '0.7rem',
                        opacity: 0.6,
                        marginBottom: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        color: '#66C9FF',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    TOASTOKU STATS
                </div>

                <StatCard label="Commands" value={formatNumber(stats.slashCount)} color="#00D4FF" />
                <StatCard label="Servers" value={formatNumber(stats.guildCount)} color="#1E90FF" />
                <StatCard label="Users" value={formatNumber(stats.userCount)} color="#0099FF" />
            </div>
        </aside>
    );
}

/* ===== STAT CARD ===== */
function StatCard({ label, value, color }) {
    return (
        <div
            style={{
                background: `${color}11`,
                padding: '12px 14px',
                borderRadius: '4px',
                border: `1px solid ${color}33`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 0 15px ${color}33`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}33`;
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <span
                style={{
                    fontSize: '11px',
                    color: '#ccc',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                }}
            >
                {label}
            </span>
            <span
                style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: color,
                    textShadow: `0 0 10px ${color}`
                }}
            >
                {value}
            </span>
        </div>
    )
}

/* ===== STYLES ===== */
const styles = {
    sidebarHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '16px',
        borderBottom: '1px solid #66C9FF33',
    },

    sidebarTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: 0,
        letterSpacing: '3px',
        textShadow: '0 0 15px rgba(102m 201, 255, 0.5)',
        fontFamily: 'Rubik, sans-serif',
        textTransform: 'uppercase'
    },

    closeButton: {
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#66C9FF',
        padding: '4px 8px',
        transition: 'all 0.2s',
        textShadow: 'none',
        fontWeight: 'bold'
    },

    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '32px',
        flex: 1,
    },

    navItem: {
        width: '100%',
        display: 'block',
        padding: '12px 16px',
        fontSize: '13px',
        color: '#ccc',
        background: 'transparent',
        border: '1px solid transparent',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        textAlign: 'left'
    },

    sidebarFooter: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingTop: '24px',
        borderTop: '1px solid #66C9FF33'
    },
}

export default SidebarComponent;