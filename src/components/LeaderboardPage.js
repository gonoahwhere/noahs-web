/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react';

/* ===== IMAGES ===== */
import r01 from '../images/leaderboard/01.png';
import r02 from '../images/leaderboard/02.png';
import r03 from '../images/leaderboard/03.png';
import r04 from '../images/leaderboard/04.png';
import r05 from '../images/leaderboard/05.png';
import r06 from '../images/leaderboard/06.png';
import r07 from '../images/leaderboard/07.png';
import r08 from '../images/leaderboard/08.png';
import r09 from '../images/leaderboard/09.png';
import r10 from '../images/leaderboard/10.png';

import gold from '../images/leaderboard/gold.png';
import silver from '../images/leaderboard/silver.png';
import bronze from '../images/leaderboard/bronze.png';

/* ===== HELPERS ===== */
const numberRanks = {
    4: r04,
    5: r05,
    6: r06,
    7: r07,
    8: r08,
    9: r09,
    10: r10
};

const getRankImage = (rank) => {
    if (rank === 1) return gold;
    if (rank === 2) return silver;
    if (rank === 3) return bronze;

    return numberRanks[rank] || null;
};

const formatLabel = (str) => str.replace(/([A-Z])/g, '  $1').replace(/^./, s => s.toUpperCase());

/* ===== PAGE ===== */
function LeaderboardPage() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('level');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.gonoahwhere.com/api/leaderboard?category=${category}&limit=10`)
            .then(res => res.json())
            .then(res => setData(res.leaderboard || []))
            .catch(err => setError(err.message));
    }, [category]);

    if (error) return <p>Error: {error}</p>;
    if (!data.length) return <p>Loading leaderboard...</p>;

    return (
        <div style={styles.container}>
            {/* CATEGORY SELECTION */}
            <div style={styles.tabs}>
                {[
                    'currentToasts',
                    'spentToasts',
                    'totalToasts',
                    'level',
                    'gamesPlayed',
                    'votes',
                    'hints',
                    'commandsUsed'
                ].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        style={{
                            ...styles.tab,
                            borderColour: category === cat ? '#00D4FF' : '#2a3a5a',
                            color: category === cat ? '#00D4FF' : '#ccc'
                        }}
                    >
                        {formatLabel(cat)}
                    </button>
                ))}
            </div>

            {/* CARDS */}
            {data.map((user, i) => (
                <LeaderboardCard key={i} user={user} rank={i + 1} category={category} />
            ))}
        </div>
    )
}
/* ===== CARD ===== */
function LeaderboardCard({ user, rank, category }) {
    const rankImage = getRankImage(rank);

    const statMap = {
        currentToasts: user.formatted.current,
        spentToasts: user.formatted.spent,
        totalToasts: user.formatted.total,
        level: user.formatted.level,
        gamesPlayed: user.formatted.gamesPlayed,
        votes: user.formatted.votes,
        hints: user.formatted.hints,
        commandsUsed: user.formatted.commandsUsed
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00D4FF';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a3a5a';
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            <div style={styles.header}>
                {/* RANK IMAGE */}
                <div style={styles.rankWrapper}>
                    {rankImage ? (
                        <img src={rankImage} alt={`Rank ${rank}`} style={styles.rankImage} />
                    ) : (
                        <span style={styles.rankFallback}>#{rank}</span>
                    )}
                </div>

                {/* USER */}
                <div style={styles.userInfo}>
                    <div style={styles.name}>
                        {user.displayName}
                    </div>
                </div>

                {/* MAIN STAT */}
                <div style={styles.value}>
                    {statMap[category]}
                </div>
            </div>
        </div>
    )
}

/* ===== STYLES ===== */
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '95%'
    },

    tabs: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    tab: {
        padding: '8px 12px',
        background: '#0a0f1f',
        border: '1px solid #2a3a5a',
        borderRadius: '6px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    card: {
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%)',
        border: '1px solid #2a3a5a',
        borderRadius: '8px',
        padding: '16px',
        transition: 'all 0.3s ease'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    rankWrapper: {
        width: '50px',
        display: 'flex',
        justifyContent: 'center'
    },

    rankImage: {
        width: '40px',
        height: '40px',
        objectFit: 'contain'
    },

    rankFallback: {
        color: '#FFD700',
        fontWeight: 'bold'
    },

    userInfo: {
        flex: 1
    },

    name: {
        color: '#00D4FF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    sub: {
        fontSize: '0.75rem',
        color: '#aaa'
    },

    value: {
        color: '#FFD700',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    }
};

export default LeaderboardPage;