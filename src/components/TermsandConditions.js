

import { Typography, Box, } from '@mui/material';
import React from 'react';

function TermsandConditions({ nameColor }) {

    return (
        <>
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
                    Terms &nbsp;
                    and  &nbsp;
                    Conditions
                </Typography>

                <Typography color={nameColor} sx={{ fontSize: { xs: 25, md: 30 } }}>
                    Terms and Conditions for Warzone Weapons Guide App
                    Last updated: 2023-12-05
                    Introduction
                    Welcome to the Warzone Weapons Guide App ("the App"). This App is operated and provided by BattleClub Inc. By using this App, you agree to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern BattleClub Inc.'s relationship with you concerning this App.

                    Acceptance of Terms
                    Your access to and use of the App is conditioned on your acceptance of and compliance with these Terms. By using the App, you signify your acceptance of these Terms and Conditions.

                    No Account Required
                    To use this App, you do not need to register or create an account. There is no data storage or login credentials associated with the use of this App.

                    Third-Party Data
                    The data and information displayed in the App related to Warzone weapons are obtained from third-party sources. BattleClub Inc. does not guarantee the accuracy, completeness, or reliability of this third-party data.

                    No Warranty
                    This App is provided "as is," and BattleClub Inc. makes no representations or warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the content or information contained on the App for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

                    Limitation of Liability
                    In no event shall BattleClub Inc. be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this App.

                    Amendments
                    BattleClub Inc. reserves the right to amend or replace these Terms and Conditions at any time. If changes are made, they will be posted on this page with the updated date reflected at the top of the document.

                    Governing Law
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of 2023-12-05.
                </Typography>

            </Box>
        </>

    );
}

export default TermsandConditions;