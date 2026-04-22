/* ===== IMPORTS ===== */
import { useState } from 'react';

/* ===== STYLES ===== */
import '../styles/sections/brand.css'

/* ===== THEMES ===== */
const THEMES = {
    default: { name: 'Default', folder: null },
    animals: { name: 'Animals', folder: 'animals' },
    colorblind: { name: 'Colorblind', folder: 'colorblind' },
    faces: { name: 'Faces', folder: 'faces' },
    toastie: { name: 'Toastie', folder: 'toastie' },
    transport: { name: 'Transport', folder: 'transport' },
};

const SUDOKU_GIVENS = [
    [4, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 9, 0, 0, 6, 0, 0, 0, 5],
    [3, 1, 0, 8, 7, 0, 0, 4, 0],
    [5, 0, 6, 2, 0, 0, 0, 7, 0],
    [0, 0, 7, 0, 0, 6, 0, 0, 1],
    [0, 0, 0, 7, 9, 8, 6, 5, 0],
    [0, 0, 0, 0, 2, 4, 0, 0, 8],
    [6, 5, 0, 0, 0, 7, 1, 9, 0],
    [0, 0, 0, 6, 1, 5, 4, 3, 0],
];

export default function BrandSection() {
    const [theme, setTheme] = useState('default');
    const currentTheme = THEMES[theme];

    const getNumberDisplay = (num) => {
        if (num === 0) return null;

        if (!currentTheme.folder) {
            return num;
        }

        const imagePath = `/src/images/themes/${currentTheme.folder}/${num}.png`;
        return <img src={imagePath} alt={num} className="w-full h-full object-contain" />;
    }

    return (
        <section className="brand scroll-target" id="brand">
            <div className="container">
                <div className="brand-content">
                    <h2 className="section-title">
                        Sudoku So Good, You'll Be Toasting Your Brain
                    </h2>
                    <p>Get your daily dose of number toast! Solve puzzles, compete with friends, and rise to the top of the Toastoku leaderboards — crust optional</p>
                </div>
            </div>

            <div className="brand-buttons">
                <div className="controls">
                    <label htmlFor="theme-select">Preview Theme:</label>
                    <select
                        id="theme-select"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        {Object.entries(THEMES).map(([key, value]) => (
                            <option
                                key={key}
                                value={key}
                            >
                                {value.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </section>
    )
}
