

import { Typography, Box, } from '@mui/material';
import React from 'react';

function PrivacyPolicy({ nameColor }) {

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx: '2px',
                transform: 'scale(0.8)',
                paddingTop: { xs: 5, md: 0 }
            }}
        >
            <Typography color={nameColor} sx={{ fontSize: 50, textAlign: "center", whiteSpace: "pre-line" }}>
                Privacy &nbsp; Policy
            </Typography>
            <Typography color={nameColor} sx={{ fontSize: { xs: 25, md: 30 } }}>
                Privacy Policy for Warzone Weapons Guide App
                Last updated: 2020-12-05
                Introduction
                Welcome to the Warzone Weapons Guide App ("the App"), operated by BattleClub Inc. This Privacy Policy is meant to help you understand what data we collect, what we use it for, and how you can manage it.

                What Data We Collect
                As the App does not require users to register or log in, no personal data is stored or collected through the App.

                Third-Party Data
                The App displays information related to Warzone  weapons, sourced from third parties. We do not collect or store this third-party data.

                Security
                Though the App does not collect personal data, we still implement a variety of security measures to safeguard any data processed through the App.

                Changes to this Privacy Policy
                BattleClub Inc. reserves the right to modify this Privacy Policy at any time. Updates will be posted on this page with the last updated date reflected at the top.

                Contact
                For any questions or concerns related to this Privacy Policy, please contact us at support@wzfavorites.com

                Contact Us
                BattleClub Inc.
                For any inquiries or issues concerning the Warzone  Weapons Guide App, please feel free to reach out to us:

                Email: support@wzfavorites.com
                We strive to respond to all queries and concerns as quickly as possible.
            </Typography>
        </Box>


    );
}

export default PrivacyPolicy;