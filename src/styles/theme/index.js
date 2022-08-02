const ApplicationThemes = {
    sizes: {
        toolbarHeight: '75px',
    },
    spacing: {
        toolbarPadding: '4rem',
        paddingContent: '3rem 4.5rem'
    },
    themes: {
        light: {
            name: "Claro",
            key: "application_theme_light",
            colors: {
                primary: 'rgba(255,120,78,1.0)',
                background: 'rgba(255,255,255,1.0)',
                toolbar: 'rgba(255,255,255,1.0)',
                toolbarButton: 'rgba(245,245,245,1.0)',
                text: 'rgba(34,34,34,1.0)',
                hover: 'rgba(28,28,28,1.0)',
                drawerBackground: 'rgba(245,245,245,1.0)',
                card: 'rgba(255,255,255,1.0)',
                shadow: 'rgba(149, 157, 165, 0.2)',
                hoverShadow: 'rgba(90, 120, 120, 0.2)',
                interviewBackground: 'rgba(245,245,245,1.0)'
            }
        },
        dark: {
            name: "Escuro",
            key: "application_theme_dark",
            colors: {
                primary: 'rgba(255,120,78,1.0)',
                background: 'rgba(8,7,19,1.0)',
                toolbar: 'rgba(8,7,19,1.0)',
                toolbarButton: 'rgba(29,14,58,1.0)',
                text: 'rgba(200,200,200,1.0)',
                hover: 'rgba(255,255,255,1.0)',
                drawerBackground: 'rgba(11,10,23,1.0)',
                card: 'rgba(11,10,23,1.0)',
                shadow: 'rgba(11,10,23,0.2)',
                hoverShadow: 'rgba(0,0,0,0.2)',
                interviewBackground: 'rgba(11,10,23,1.0)'
            }
        }
    }
}

// Get theme by local storage or default theme
const get = () => {
    const storage = localStorage.getItem('ApplicationTheme');

    if (storage) {
        return {
            defaults: {
                sizes: ApplicationThemes['sizes'],
                spacing: ApplicationThemes['spacing']
            }, 
            colors: ApplicationThemes.themes[storage].colors
        };
    }

    Theme.set('light');
    return {
        defaults: {
            sizes: ApplicationThemes['sizes'],
            spacing: ApplicationThemes['spacing']
        }, 
        colors: ApplicationThemes.themes['light'].colors
    };
}

const getName = () => {
    return localStorage.getItem('ApplicationTheme');
}

const set = (themeName) => {
    localStorage.setItem('ApplicationTheme', themeName);
}

const Theme = {
    get,
    getName,
    set
}

export default Theme;