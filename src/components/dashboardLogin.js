/* ===== IMPORTS ===== */
import { Link } from 'react-router-dom';

/* ===== STYLES ===== */
import '../styles/pages/404Page.css'

/* ===== DISPLAY ===== */
function DashboardLoginPage() {
    return (
        <>
            <div className='page-404'>
                <div className='content-wrapper'>                  
                    <h1 className='error-item error-title'>ACCESS RESTRICTED</h1>
                    
                    <p className='error-item error-message'>
                        You've drifted into a restricted zone... authenticate to continue.
                    </p>

                    <div className='error-item sparkle-line'></div>

                    <div className='error-item button-group'>
                        <Link to='/' className='error-item home-button' style={{ letterSpacing: '2px' }}>
                            ✦ Return Home ✦
                        </Link>

                        <a href='http://212.192.28.111:25897/api/auth/discord' className='error-item home-button' style={{ letterSpacing: '2px' }}>
                            ✦ Login via Discord ✦
                        </a>
                    </div>
                </div>
                {/* Decorative floating elements */}
                <div className='floaty' style={{ '--delay': '0s', '--duration': '6s' }}>✦</div>
                <div className='floaty' style={{ '--delay': '0.5s', '--duration': '7s' }}>◆</div>
                <div className='floaty' style={{ '--delay': '1s', '--duration': '8s' }}>✦</div>
                <div className='floaty' style={{ '--delay': '1.5s', '--duration': '6.5s' }}>◆</div>
                <div className='floaty' style={{ '--delay': '2s', '--duration': '7.5s' }}>✦</div>
            </div>
        </>
    )
}

export default DashboardLoginPage;