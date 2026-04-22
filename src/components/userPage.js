/* ===== ACCOUNT ===== */
function getAccountCreatedDate(userId) {
    const DISCORD_EPOCH = 1420070400000;

    const binary = Number(userId).toString(2);
    const timestamp = parseInt(binary.slice(0, -22), 2) + DISCORD_EPOCH;

    return new Date(timestamp);
}

function formatAccountAge(userId) {
    const created = getAccountCreatedDate(userId);
    const diff = Date.now() - created.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days >= 365) return `${Math.floor(days / 365)}y ago`;
    if (days >= 30) return `${Math.floor(days / 30)}mo ago`;
    if (days >= 7) return `${Math.floor(days / 7)}w ago`;
    return `${days}d ago`;
}

/* ===== PAGE ===== */
function UserPage({ user, profile }) {

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

                {/* IDENTITY SECTION */}
                <Section title="Identity" color="#00D4FF">
                    <Row label="User ID" value={user.id} />
                    <Row label="Username" value={`@${user.username}`} />
                    <Row label="Display Name" value={user.global_name || "N/A"} />
                    <Row label="Created" value={getAccountCreatedDate(user.id).toLocaleDateString()} />
                    <Row label="Account Age" value={formatAccountAge(user.id)} />
                </Section>

                {/* PROGRESS */}
                <Section title="Progress" color="#00BFFFF">
                    <Row label="Rank" value="#1 Global (placeholder)" />
                    <Row label="Level" value={profile?.rank?.level ?? "0"} />
                    <Row label="EXP" value={profile?.rank?.exp ?? "0"} />
                </Section>

                {/* ECONOMY */}
                <Section title="Economy" color="#1E90FF">
                    <Row label="Earned Toasts" value={(profile?.balance?.currentToasts + profile?.balance?.spentToasts) ?? "0"} />
                    <Row label="Current Toasts" value={profile?.balance?.currentToasts ?? "0"} />
                    <Row label="Spent Toast" value={profile?.balance?.spentToasts ?? "0"} />
                </Section>

                {/* GAMEPLAY */}
                <Section title="Gameplay" color="#4C90D9">
                    <Row label="Games Played" value={profile?.misc?.gamesPlayed ?? "0"} />
                    <Row label="Bonus Hints" value={profile?.misc?.hints ?? "0"} />
                    <Row label="Daily Hints" value={profile?.misc?.dailyHints ?? "0"} />
                    <Row label="Hints Used" value="0 (placeholder)" />
                </Section>

                {/* ENGAGEMENT */}
                <Section title="Engagement" color="#00CCFF">
                    <Row label="Commands Used" value={profile?.commandsUsed ?? "0"} />
                    <Row label="Votes" value={profile?.misc?.votes ?? "0"} />
                    <Row label="Boosters" value={profile?.misc?.boosters ?? "0"} />
                </Section>

                {/* PRIVACY */}
                <Section title="Privacy" color="#99DDFF">
                    <Row label="Anonymous" value={profile?.anonymous ? 'Enabled' : 'Disabled'}/>
                    <Row label="Anonymous Name" value={profile?.anonymous ? profile?.anonymousName : 'Anonymous Mode Disabled'}/>
                </Section>

                {/* ACHIEVEMENTS */}
                <Section title="Achievements" color="#66C9FF">
                    <Row label="Last Achievement" value="Solve a 'Hard' puzzle with no hints." />
                    <Row label="Total Achievements" value="532" />
                    <Row label="Badges" value={profile?.achieve?.badges?.length ?? "0"} />
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

export default UserPage;