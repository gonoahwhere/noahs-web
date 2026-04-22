/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react';

/* ===== PAGE ===== */
function ChangelogPage() {
    const [logs, setLogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://www.gonoahwhere.com/api/changelogs')
            .then(res => res.json())
            .then(data => {
                const sorted = [...data].sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
                setLogs(sorted.slice(0, 5)
            )})
            .catch(err => setError(err.message));
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!logs.length) return <p>Loading changelogs...</p>;

    return (
        <div style={styles.container}>
            {logs.map((log, i) => (
                <ChangelogCard key={i} log={log} />
            ))}
        </div>
    )
}

/* ===== CARD ===== */
function ChangelogCard({ log }) {
    return (
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
            <div style={styles.header}>
                <h2 style={styles.version}>{log.version}</h2>
                <span style={styles.date}>{log.date}</span>
            </div>

            <p style={styles.desc}>{log.description}</p>

            {log.added?.length > 0 && (
                <Section title="Added" items={log.added} color="#00D4FF" />
            )}

            {log.changed?.length > 0 && (
                <Section title="Changed" items={log.changed} color="#1E90FF" />
            )}

            {log.fixed?.length > 0 && (
                <Section title="Fixed" items={log.fixed} color="#66C9FF" />
            )}

            {log.issues?.length > 0 && (
                <Section title="Issues" items={log.issues} color="#FF4D4D" />
            )}

            {log.notes?.length > 0 && (
                <Section title="Notes" items={log.notes} color="#FFD700" />
            )}
        </div>
    );
}

/* ===== SECTION ===== */
function Section({ title, items, color }) {
    return (
        <div style={{ marginTop: '12px' }}>
            <h3 style={{ 
                color, 
                marginBottom: '6px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
            }}>{title}</h3>
            <ul style={styles.list}>
                {items.map((item, i) => (
                    <li key={i} style={styles.item}>
                        {item.split(/(\[.*?\]\(.*?\))/g).map((part, j) => {
                            const match = part.match(/\[(.*?)\]\((.*?)\)/);

                            if (match) {
                                return (
                                    <a
                                        key={j}
                                        href={match[2]}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: '#00D4FF',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {match[1]}
                                    </a>
                                );
                            }

                            return part;
                        })}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ===== STYLES ===== */
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '95%'
    },

    card: {
        background: 'linear-gradient(135deg, #0a0f1f 0%, #1a1f3a 100%',
        border: '1px solid #66C9FF33',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 30px rgba(102, 201, 255, 0.1)',
        transition: 'all 0.3s ease'
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    version: {
        color: '#00D4FF',
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    date: {
        color: '#ccc',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },

    desc: {
        color: '#ccc',
        marginBottom: '10px'
    },

    list: {
        margin: 0,
        paddingLeft: '18px',
    },

    item: {
        color: '#ccc',
        marginBottom: '4px'
    }
};

export default ChangelogPage;