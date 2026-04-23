/* ===== IMPORTS ===== */
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

/* ===== FILES ===== */
import BrandSection from '../components/BrandSection.js'
import ChangelogPage from '../components/Changelogs.js'
import CommandsPage from '../components/CommandSection.js'
import SidebarComponent from '../components/SideBar.js'
import DashboardLoginPage from '../components/dashboardLogin.js'
import UserPage from '../components/userPage.js'
import ProfilePage from '../components/profilePage.js'
import QuestsPage from '../components/quests.js'
import LeaderboardPage from '../components/LeaderboardPage.js'

/* ===== DISPLAY ===== */
function ToastokuDashboardPage() {
    const [activeNav, setActiveNav] = useState('changelogs')
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [quests, setQuests] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get("token")
        const savedToken = token || localStorage.getItem("token")

        if (token) {
            localStorage.setItem("token", token)
            window.history.replaceState({}, document.title, "/toastoku/dashboard")
        }

        if (!savedToken) {
            setLoading(false)
            return
        }

        fetch('http://212.192.28.111:25897/api/me', {
            headers: {
                Authorization: `Bearer ${savedToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.id) {
                setUser(data)
            } else {
                localStorage.removeItem("token")
                setUser(null)
            }
        })
        .catch(() => {
            localStorage.removeItem("token")
            setUser(null)
        })
        .finally(() => setLoading(false))

    }, [])

    useEffect(() => {
        if (!user) return
        const token = localStorage.getItem("token");

        fetch('http://212.192.28.111:25897/api/user/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(() => setProfile(null));
    }, [user])

    useEffect(() => {
        if (!user) return
        const token = localStorage.getItem("token")

        fetch('http://212.192.28.111:25897/api/quests/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(setQuests);
    }, [user])
    
    if (loading) return null;

    if (!user) {
        return <DashboardLoginPage />
    }

    return (
        <>
            <Helmet>
                <title>Toastoku Dashboard • gonoahwhere</title>
            </Helmet>

            <div style={{ display: 'flex', alignItems: 'flex-start', width: '95%' }}>
                <SidebarComponent activeNav={activeNav} setActiveNav={setActiveNav} user={user} />

                <main style={{ flex: 1, paddingTop: 0 }}>
                    {activeNav === 'changelogs' && <ChangelogPage />}
                    {activeNav === 'commands' && <CommandsPage />}
                    {activeNav === 'leaderboard' && <LeaderboardPage />}
                    {activeNav === 'quests' && <QuestsPage quests={quests} />}
                    {activeNav === 'profile' && <ProfilePage user={user} profile={profile}/>}
                    {activeNav === 'user' && <UserPage user={user} profile={profile}/>}
                </main>
            </div>
        </>
    )
}

export default ToastokuDashboardPage;