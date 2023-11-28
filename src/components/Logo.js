import React from 'react';
import logo from '../images/WZLogo.png';
import { CardMedia, CardActionArea, Card } from '@mui/material';

export default function Logo() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <Card  sx={{ maxWidth: 150  }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="120"
                    width="120"
                    src={logo}
                />
            </CardActionArea>
        </Card>
        </div>
    );
}