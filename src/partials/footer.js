export default function Footer({ startYear = 2014 }) {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="tagline">
                    <center>
                        <p>© gonoahwhere {startYear} {year !== startYear && `- ${year}`} • Toasting ideas since day one ✨</p>
                    </center>
                </div>
            </div>
        </footer>
    )
}
