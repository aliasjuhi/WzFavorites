import React, { useState, useEffect } from 'react';
import Particle from './components/Particle';
import Logo from './components/Logo';
import Fooldal from './components/Fooldal';

import { createTheme, ThemeProvider } from '@mui/material';
import TermsandConditions from './components/TermsandConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand',
            'cursive',
        ].join(','),
    },
});

const Home = () => {

    const [bgValue, setBgValue] = useState();
    const [pValue, setPValue] = useState();
    const [value, setValue] = useState(false);

    const [nameColor, setNameColor] = useState();
    const [linkColor, setLinkColor] = useState();

    const handleToggle = (event) => {
        setValue(event.target.checked);
        if (value === true) {
            setBgValue("#2d3b2a");
            setPValue("#000000");
            setLinkColor("#000000");
            setNameColor("#D69A1A");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
            setLinkColor("#FFFFFF");
            setNameColor("#D69A1A");
        }
    }

    useEffect(() => {
        if (value === false) {
            setBgValue("#2d3b2a");
            setPValue("#000000");
            setNameColor("#D69A1A");
            setLinkColor("#D69A1A");
        } else {
            setBgValue("#000000");
            setPValue("#FFFFFF");
            setNameColor("#D69A1A");
            setLinkColor("#FFFFFF");
        }
    }, [value])

    return (
        <ThemeProvider theme={theme}>
            <>
                <Particle bgValue={bgValue} pValue={pValue} />
                <Logo handleToggle={handleToggle} mode={value} />
                <Fooldal nameColor={nameColor} linkColor={linkColor} />
                <TermsandConditions bgValue={bgValue} nameColor={nameColor} linkColor={linkColor} />
                <PrivacyPolicy bgValue={bgValue}  nameColor={nameColor} linkColor={linkColor} />
            </>
        </ThemeProvider>
    );
}

export default Home;