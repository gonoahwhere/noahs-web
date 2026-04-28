/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react';

/* ===== HELPERS ===== */
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

/* ===== PAGE ===== */
function ProfilePage({ user, profile }) {
    const [rank, setRank] = useState(null);
    
    useEffect(() => {
        fetch('https://www.gonoahwhere.com/api/leaderboard?category=level&limit=10000')
            .then(res => res.json())
            .then(data => {
                const map = data.rankMap;

                setRank(
                    map?.[String(user.id)] ?? null
                );
            })
            .catch(() => setRank(null));
    }, [user]);
    
    const tags = getUserTags(user, profile);
    
    return (
        <div style={styles.container}>

            <div
                style={styles.card}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00D4FF';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2a3a5a';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >

                {/* HEADER */}
                <div style={styles.header}>
                    <img
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                        alt="avatar"
                        style={styles.avatar}
                    />

                    <div style={styles.tagsUnderAvatar}>
                        {tags.map((tag, i) => (
                            <span key={i} style={{ ...styles.tag, ...tag.style }}>
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* PROGRESS */}
                <Section title="Progress" color="#00BFFFF">
                    <Row label="Rank" value={formatNumber(rank != null ? `#${rank}` : "Unranked")} />
                    <Row label="Level" value={formatNumber(profile?.rank?.level ?? "0")} />
                    <Row label="EXP" value={formatNumber(profile?.rank?.exp ?? "0")} />
                </Section>

                {/* ECONOMY */}
                <Section title="Economy" color="#1E90FF">
                    <Row label="Earned Toasts" value={formatNumber((profile?.balance?.currentToasts + profile?.balance?.spentToasts) ?? "0")} />
                    <Row label="Current Toasts" value={formatNumber(profile?.balance?.currentToasts ?? "0")} />
                    <Row label="Spent Toast" value={formatNumber(profile?.balance?.spentToasts ?? "0")} />
                </Section>

                {/* GAMEPLAY */}
                <Section title="Gameplay" color="#4C90D9">
                    <Row label="Games Played" value={formatNumber(profile?.misc?.gamesPlayed ?? "0")} />
                    <Row label="Bonus Hints" value={formatNumber(profile?.misc?.hints ?? "0")} />
                    <Row label="Daily Hints" value={formatNumber(profile?.misc?.dailyHints ?? "0")} />
                    <Row label="Hints Used" value="0 (placeholder)" />
                </Section>
            </div>
        </div>
    );
}

/* ===== SECTION ===== */
function Section({ title, color, children }) {
    return (
        <div style={{ marginTop: '18px' }}>
            <div style={{ ...styles.sectionTitle, color }}>
                {title}
            </div>
            <div style={styles.sectionBox}>
                {children}
            </div>
        </div>
    );
}

function Row({ label, value }) {
    return (
        <div style={styles.row}>
            <span style={styles.rowLabel}>{label}</span>
            <span style={styles.rowValue}>{value}</span>
        </div>
    );
}


/* ===== TAG LOGIC ===== */
function getUserTags(user) {
    const tags = [];

    if (user.id === "372456601266683914") {
        tags.push(
            { label: 'Owner', style: { background: '#FF174422', borderColor: '#FF1744', color: '#FF1744' } },
            { label: 'Bot Dev', style: { background: '#FFD70022', borderColor: '#FFD700', color: '#FFD700' } },
            { label: 'Player', style: { background: '#FF66CC22', borderColor: '#FF66CC', color: '#FF66CC' } }
        );
    } else {
        tags.push(
            { label: 'Player', style: { background: '#FF66CC22', borderColor: '#FF66CC', color: '#FF66CC' } }
        );
    }

    return tags;
}

/* ===== STYLES ===== */
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '95%',
    },

    card: {
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%)',
        border: '1px solid #2a3a5a',
        borderRadius: '8px',
        padding: '20px',
        width: '95%',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '10px'
    },

    avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '1px solid #2a3a5a'
    },

    username: {
        color: '#00D4FF',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    meta: {
        color: '#ccc',
        fontSize: '12px',
        opacity: 0.8
    },

    sectionTitle: {
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '8px',
        opacity: 0.8,
        fontWeight: 'bold'
    },

    sectionBox: {
        borderTop: '1px solid #2a3a5a',
        paddingTop: '10px',
        marginBottom: '10px'
    },

    row: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px 0',
        fontSize: '13px'
    },

    rowLabel: {
        color: '#aaa',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    rowValue: {
        color: '#00D4FF',
        fontWeight: 'bold'
    },

    tags: {
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
    },

    tag: {
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '11px',
        border: '1px solid',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    tagsUnderAvatar: {
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '8px'
    },
};

export default ProfilePage;