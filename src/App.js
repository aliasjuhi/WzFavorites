import React from 'react';
import Home from './Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsandConditions from './components/TermsandConditions';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='Privacy-Policy' element={<PrivacyPolicy />} />
                <Route exact path='Terms-and-Conditions' element={<TermsandConditions />} />
                
            </Routes>
        </Router>
    )
}