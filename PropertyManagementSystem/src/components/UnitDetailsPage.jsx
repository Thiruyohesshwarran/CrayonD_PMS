import React from 'react';
import { Box, Typography, Button, IconButton, Badge } from '@mui/material';
import Grid from '@mui/material/Grid2';
import JumeiraEstate from '../assets/JumeiraEstate.png';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import Trash from '../assets/Trash.svg';

const UnitCard = ({ discounted, price, originalPrice }) => {
  return (
    <Box
      sx={{
        borderRadius: '6px',
        padding: '10px',
        backgroundColor: '#fff',
        textAlign: 'center',
        position: 'relative',
        boxSizing:'border-box'
      }}
    >
      <Box sx={{ position: 'relative', marginBottom: '12px' }}>
        <img
          src={JumeiraEstate}
          alt="Unit"
          style={{ width: '185px',height:"100px", borderRadius: '8px' }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: '#FFF',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
            <img src={Trash}/>
        </IconButton>
        {discounted && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              backgroundColor: '#FFF4EB',
              borderRadius: '8px',
              padding: '4px 8px',
            }}
          >
            <Typography
              variant="warning"
              sx={{ color: '#FF9340', fontWeight: 'bold' }}
            >
              % Discount Applied
            </Typography>
          </Box>
        )}
      </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography sx={{ fontWeight: 'bold',fontSize:"13px" }}>
        Jumeirah Estate
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          color: discounted ? '#FF9340' : '#000',
          fontSize:"13px",
        }}
      >
        {discounted ? `$ ${price}` : `$ ${originalPrice}`}
      </Typography>
      </Box>
      <Typography color="textSecondary" sx={{fontSize:"11px"}}>
        Jumeirah Golf Estate &bull; 2000 Sq.Ft
      </Typography>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <HotelIcon color="disabled" style={{fontSize:"15px"}} />
          <Typography variant="body2" color="textSecondary" fontSize="13px">
            2
          </Typography>
        </Box>
        <Typography color='#CED3DD'>&bull;</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <BathtubIcon color="disabled" style={{fontSize:"15px"}}/>
          <Typography variant="body2" color="textSecondary" fontSize="13px">
            2
          </Typography>
        </Box>
        <Typography color='#CED3DD'>&bull;</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <HomeIcon color="disabled" style={{fontSize:"15px"}}/>
          <Typography variant="body2" color="textSecondary" fontSize="13px">
            2BHK
          </Typography>
        </Box>
      </Box>

      <Button variant="text" sx={{ color: '#5078E1',fontSize:"11px",textTransform:"none" }}>
        + Customise
      </Button>
    </Box>
  );
};

const UnitDetailsPage = () => {
  return (
    <Box sx={{ height: '400px',overflowY: 'auto', padding:'5px',paddingTop:"20px",
        '&::-webkit-scrollbar': {
        display: 'none', 
        },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none', }}>
    <Grid container spacing={2} width="100%">
        <Grid item>
        <UnitCard discounted={true} price={900} originalPrice={1200} />
        </Grid>
        <Grid item>
        <UnitCard discounted={false} price={1200} originalPrice={1200} />
        </Grid>
        <Grid item>
        <UnitCard discounted={false} price={900} originalPrice={1200} />
        </Grid>
        <Grid item>
        <UnitCard discounted={false} price={1200} originalPrice={1200} />
        </Grid>
        <Grid item>
        <UnitCard discounted={false} price={1200} originalPrice={1200} />
        </Grid>
    </Grid>
    </Box>
    );
};

export default UnitDetailsPage;
