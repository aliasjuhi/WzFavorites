

import { Grid, Typography, Box,  Card, CardMedia, CardActionArea, Link, Stack } from '@mui/material';
import React from 'react';

import googlePlay from '../images/google-app-store.png';
import weapons from '../images/wz-favorites.png';
import buffnerf from '../images/buffnerf.png';
import loadout from '../images/loadout.png';

function Fooldal({ linkColor, nameColor }) {
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
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item display={{ xs: 'block', md: 'none' }}>
                        <Typography color={nameColor} sx={{ fontSize: 50, textAlign: "center", whiteSpace: "pre-line" }}>
                            W Z &nbsp;
                            Favorites &nbsp;
                            App
                        </Typography>
                    </Grid>
                    <Grid item display={{ xs: 'none', md: 'block' }}>
                        <Typography color={nameColor} sx={{ fontSize: 80, textAlign: "center", whiteSpace: "pre-line" }}>
                            Warzone &nbsp;
                            Favorites &nbsp;
                            App
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center" justifyContent="center" direction="column">
                        <Grid container alignItems="center" justifyContent="center" direction="row" spacing={2}>

                            <Link href="https://play.google.com/store/apps" target="_blank" color={linkColor}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width="200"
                                    src={googlePlay}
                                />
                            </Link>
                            <Grid item>
                                <Typography variant="body2" sx={{ fontSize: { xs: 30, md: 35 }, }}>
                                    <Link href="https://play.google.com/store/apps" target="_blank" color={linkColor} underline="hover">
                                        Download App
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 25, md: 30 } }}>
                            <Link
                                color={linkColor}
                                underline="hover"
                                href="/Privacy-Policy"> 
                                Privacy Policy
                            </Link>
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ fontSize: { xs: 25, md: 30 } }}>
                            <Link
                                color={linkColor}
                                underline="hover"
                                href="/Terms-and-Conditions"> 
                                Terms and Conditions
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Stack direction="row" spacing={2}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center">
                        <Card sx={{ maxWidth: 700 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="600"
                                    width="200"
                                    src={weapons}
                                />
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 700 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="600"
                                    width="200"
                                    src={buffnerf}
                                />
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 700 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="600"
                                    width="200"
                                    src={loadout}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Stack>
            </Box>
        </>

    );
}

export default Fooldal;