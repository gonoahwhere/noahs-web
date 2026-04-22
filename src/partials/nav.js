/* ===== IMPORTS ===== */
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* ===== PAGES ===== */
const pages = [
    { id: "home", label: "HOME", path: "/" },
    { id: "toastoku", label: "TOASTOKU", path: "/toastoku" },
    { id: "projects", label: "PROJECTS", path: "/projects" },
];

/* ===== EXPORT FUNCTION ===== */
export default function Nav() {
    const pillRef = useRef(null);
    const navRef = useRef(null);
    const linkRefs = useRef({});
    const location = useLocation();
    
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    
    // SYNC TAB WITH ROUTE
    useEffect(() => {
        const current = pages.find(p => p.path === location.pathname || (p.path !== "/" && location.pathname.startsWith(p.path + "/")))?.id || null;
        setActive(current);
        setMenuOpen(false);
    }, [location.pathname]);
    
    // CLOSE MENU ON RESIZE TO DESKTOP AND CLEAR STYLES
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
                
                const pill = pillRef.current;
                const nav = navRef.current;
                const activeElement = linkRefs.current[active];
                
                if (pill && nav && activeElement) {
                    // Disable transitions temporarily
                    pill.style.transition = 'none';
                    
                    // Clear and recalculate immediately
                    const rect = activeElement.getBoundingClientRect();
                    const navRect = nav.getBoundingClientRect();
                    pill.style.width = rect.width + "px";
                    pill.style.left = rect.left - navRect.left + "px";
                    pill.style.height = rect.height + "px";
                    pill.style.top = rect.top - navRect.top + "px";
                    
                    // Re-enable transitions after a frame
                    requestAnimationFrame(() => {
                        pill.style.transition = '';
                    });
                }
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [active]);
    
    // HANDLES CHANGING TAB - ONLY ON DESKTOP
    useEffect(() => {
        // Only run on desktop
        if (window.innerWidth <= 768) return;
        
        const pill = pillRef.current;
        const nav = navRef.current;
        const activeElement = linkRefs.current[active];
        if (!pill || !nav || !activeElement) return;
        
        const rect = activeElement.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        pill.style.width = rect.width + "px";
        pill.style.left = rect.left - navRect.left + "px";
        pill.style.height = rect.height + "px";
        pill.style.top = rect.top - navRect.top + "px";
    }, [active]);
    
    // HANDLES PILL IN MOBILE
    useEffect(() => {
        // Only run on mobile when menu is open
        if (window.innerWidth > 768 || !menuOpen) return;
        
        const pill = pillRef.current;
        const nav = navRef.current;
        const activeElement = linkRefs.current[active];
        if (!pill || !nav || !activeElement) return;
        
        const rect = activeElement.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        pill.style.top = rect.top - navRect.top + "px";
    }, [active, menuOpen]);
    
    // DISPLAY
    return (
        <main>
            <button 
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav ref={navRef} className={menuOpen ? 'open' : ''}>
                <div className="pill" ref={pillRef} />
                
                {pages.map((page) => (
                    <NavLink
                        key={page.id}
                        to={page.path}
                        ref={(el) => (linkRefs.current[page.id] = el)}
                        className={active === page.id ? "active" : ""}
                    >
                        {page.label}
                    </NavLink>
                ))}
            </nav>
            
            <div 
                className={`overlay ${menuOpen ? 'show' : ''}`}
                onClick={() => setMenuOpen(false)}
            />
        </main>
    );
}