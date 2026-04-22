/* ===== STYLES ===== */
import '../styles/pages/quests.css'

/* ===== PAGE ===== */
function QuestsPage({ quests }) {

    if (!quests) return <p style={{ color: '#ccc' }}>Loading quests...</p>;
    if (!Array.isArray(quests.quests)) return <p style={{ color: '#ccc' }}>No quest data found.</p>;

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
                    <h2 style={styles.title}>Weekly Quests</h2>
                    <span style={styles.week}>Week {quests.week}</span>
                </div>

                {/* QUEST LIST */}
                <div style={styles.questList}>
                    {quests.quests.map((quest) => (
                        <QuestItem key={quest.id} quest={quest} />
                    ))}
                </div>

            </div>
        </div>
    );
}

/* ===== QUEST ITEM ===== */
function QuestItem({ quest }) {

    const progressPercent = quest.total
        ? `${Math.min((quest.progress / quest.total) * 100, 100)}%`
        : "0%";

    return (
        <div style={styles.questItem}>
            <div style={styles.questHeader}>
                <span style={styles.questName}>{quest.name}</span>
                <span style={styles.questProgress}>
                    {quest.progress} / {quest.total}
                </span>
            </div>

            <div style={styles.progressBar}>
                <div
                    style={{
                        ...styles.progressFill,
                        width: progressPercent
                    }}
                />
            </div>
        </div>
    );
}

/* ===== HELPERS ===== */

// Better formatting
function formatQuestName(key) {
    return key
        .replace('quests.', '')
        .replace(/(\d+)/g, ' $1 ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase())
        .replace(/\s+/g, ' ')
        .trim();
}

// Try to guess totals from quest ID
function inferTotal(key, data) {
    const match = key.match(/\d+/);
    if (match) return Number(match[0]);

    // special case
    if (key === 'quests.custom5') {
        return 5;
    }

    return null;
}

// Progress text
function renderProgress(value, total) {
    if (Array.isArray(value)) {
        return `${value.length} / ${total || "?"}`;
    }

    if (typeof value === 'number') {
        return total ? `${value} / ${total}` : `${value}`;
    }

    return String(value);
}

// Progress %
function getProgressPercent(value, total) {
    if (!total) return '0%';

    let current = Array.isArray(value) ? value.length : value;

    return `${Math.min((current / total) * 100, 100)}%`;
}

/* ===== STYLES ===== */
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '95%'
    },

    card: {
        width: '100%',
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%)',
        border: '1px solid #2a3a5a',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease'
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },

    title: {
        color: '#00D4FF',
        margin: 0,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    week: {
        color: '#aaa',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    questList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },

    questItem: {
        border: '1px solid #2a3a5a',
        borderRadius: '6px',
        padding: '12px',
        transition: 'all 0.2s ease'
    },

    questHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px'
    },

    questName: {
        color: '#00D4FF',
        fontWeight: 'bold',
        fontSize: '13px'
    },

    questProgress: {
        color: '#ccc',
        fontSize: '12px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    progressBar: {
        height: '6px',
        background: '#1a2a4a',
        borderRadius: '4px',
        overflow: 'hidden'
    },

    progressFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #00D4FF, #1E90FF, #66C9FF)',
        backgroundSize: '200% 200%',
        animation: 'progressGradient 3s ease infinite',
        transition: 'width 0.3s ease',
        borderRadius: '4px'
    }
};

export default QuestsPage;