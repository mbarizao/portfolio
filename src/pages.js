import {Routes, Route} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Theme from 'styles/theme';

// Pages
import Home from 'pages/home';

const Pages = () => {
    const [theme, setTheme] = useState(Theme.get());

    // Toogle theme on click
    const toggleTheme = () => {
        Theme.set(Theme.getName() === 'light' ? 'dark' : 'light');
        setTheme(Theme.get());
    }

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<Home toggleTheme={toggleTheme} />} />
            </Routes>
        </ThemeProvider>
    );
}

export default Pages;