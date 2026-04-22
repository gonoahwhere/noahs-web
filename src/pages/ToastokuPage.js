/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

/* ===== STYLES ===== */
import '../styles/pages/toastokuPage.css'

/* ===== IMAGES ===== */
import toastokuLogo from '../images/toastoku.png'

/* ===== EXPORT FUNCTION ===== */
export default function Toastoku() {
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

    return (
        <>
            <Helmet>
                <title>Toastoku • gonoahwhere</title>
            </Helmet>

            <div className='toastoku-center'>
                <h1 className='title' style={{ fontWeight: 'bold', letterSpacing: '2px' }}><span style={{ color: '#66C9FF' }}>TOAS</span>TOKU</h1>

                <br /><br />
                <img src={toastokuLogo} className='pfp' style={{ marginTop: '-30px' }} alt='Toastoku' />

                <br /><br /><br /><br />
                <p className='stats' style={{ color: '#ccc', marginTop: '-50px', fontFamily: 'Sniglet' }}>
                    Currently being used in <strong>{stats.guildCount.toLocaleString()}</strong> servers with <strong>{stats.slashCount.toLocaleString()}</strong> commands.
                </p>

                <br />
                <div className='button-container'>
                    <button className='glow-btn'><i class='fas fa-robot'></i> <a href='https://discord.com/oauth2/authorize?client_id=1384180054984097975&permissions=51200&integration_type=0&scope=bot+applications.commands'>INVITE TOASTOKU</a></button>
                    <button className='glow-btn'><i class='fas fa-tools'></i> <a href='https://discord.gg/TQNQSen7Ur'>SUPPORT SERVER</a></button>
                    <button className='glow-btn'><i class='fas fa-vote-yea'></i> <a href='https://top.gg/bot/1384180054984097975/vote'>VOTE FOR TOASTOKU</a></button>
                    <button className='glow-btn'><i className='fas fa-comment'></i> <a href='https://top.gg/bot/1384180054984097975#reviews'>LEAVE A REVIEW</a></button>
                    <button className='glow-btn'><i className='fas fa-gear'></i> <a href='https://gonoahwhere.com/toastoku/dashboard'>DASHBOARD</a></button>
                </div>
                <br />
                <br />

            </div>
        </>
    )
}