import React,{useState} from 'react';
import { Box, Typography, Button, IconButton, Badge } from '@mui/material';
import Grid from '@mui/material/Grid2';
import JumeiraEstate from '../assets/JumeiraEstate.png';
import HomeIcon from '@mui/icons-material/Home';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import Trash from '../assets/Trash.svg';
import CustomPopperButton from './CustomPopperButton';
import UnitDetailsDialogBox from './UnitDetailsDialogBox';

const UnitCard = ({ discounted, price, originalPrice }) => {
  const [openDialogBox, setOpenDialogBox] = useState(false); 

  const handleOpenDialogBox = () => setOpenDialogBox(true); 
  const handleCloseDialogBox = () => setOpenDialogBox(false);


  return (
    <Box
      sx={{
        borderRadius: '6px',
        padding: '10px 10px 2px 10px',
        backgroundColor: '#fff',
        textAlign: 'center',
        position: 'relative',
        boxSizing:'border-box',
        cursor:"pointer",
      }}
    >
      <Box sx={{ position: 'relative', marginBottom: '12px' }} onClick={handleOpenDialogBox}>
        <img
          src={JumeiraEstate}
          alt="Unit"
          style={{ width: '185px',height:"100px", borderRadius: '4px' }}
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

        {/* conditional discount */}
        {discounted && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '8px',
              right: '0px',
              backgroundColor: '#FFF4EB',
              borderRadius: '4px 0 0 4px',
              padding: '2px 4px',
            }}
          >
            <Typography
              variant="warning"
              sx={{ color: '#FF9340', fontWeight: 'bold',fontSize:"10px" }}
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
      <UnitDetailsDialogBox open={openDialogBox} handleClose={handleCloseDialogBox} />
      <CustomPopperButton/>
    </Box>
  );
};

const UnitDetailsPage = () => {
  return (
    <Box sx={{ height: '330px',overflowY: 'auto', padding:'20px 5px',position: 'relative',
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
