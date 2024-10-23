import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, Button,
  Typography, Box,  Checkbox, Divider, Avatar, DialogActions
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Amendity from '../assets/Amendity.png';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const RemoveComponentDialogBox = ({StyledListItem}) => {
    const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const handleOpenRemoveDialog = () => setOpenRemoveDialog(true);
  const handleCloseRemoveDialog = () => setOpenRemoveDialog(false);

  return (
    <div>
      <StyledListItem onClick={handleOpenRemoveDialog}>Remove Component</StyledListItem>

      <Dialog
        open={openRemoveDialog}
        onClose={handleCloseRemoveDialog}
        maxWidth={false}
        fullWidth={true}
        sx={{ '& .MuiDialog-paper': { width: '800px', height: '600px', 
                                        border: '1px solid #E4E8EE',borderRadius: '8px'} }}
      >
        <DialogTitle sx={{ m: 0, p: 1.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: "15px", color: "#091B29" }}>Remove Component</Typography>
            <IconButton
            aria-label="close"
            onClick={handleCloseRemoveDialog}
            sx={{
                position: 'absolute',
                right: 5,
                top: 5,
                color: "#7C8594",
            }}
            >
            <CloseIcon />
            </IconButton>
        </DialogTitle>
        <Divider />

{/* Dialog Content */}
<DialogContent dividers sx={{ p: 3 }}>
  <Grid container spacing={2} boxSizing="border-box">
    {/* Left Section (Unit Details) */}
    <Grid item width="48%">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {/* Main Image */}
        <Box sx={{display:"flex"}}>
        <Box
          component="img"
          src={Amendity} // Placeholder, replace with real image URL
          alt="Unit"
          sx={{
            width: '50%',
            height: '150px',
            borderRadius: '8px',
            objectFit: 'cover'
          }}
        />
        {/* Additional Images */}
        <Box sx={{ display: 'flex',flexWrap:'wrap' ,gap: 1,paddingLeft:"10px" }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              component="img"
              src={Amendity} // Placeholder images
              alt={`Image ${index + 1}`}
              sx={{
                width: '70px',
                height: '70px',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          ))}
        </Box>
        </Box>
        {/* Unit Information */}
        <Typography fontSize="17px" color='#091B29' fontWeight="bold">Jumeirah Estate</Typography>
        <Typography variant="body2" color="text.secondary">Rubix Apartment, K Tower, Floor 1</Typography>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'left',
            gap: '12px',
            alignItems: 'center',
            marginTop: '8px',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HotelIcon color="disabled" style={{fontSize:"15px"}} />
            <Typography variant="body2" color="#4E5A6B" fontSize="13px" fontWeight="bold">
                2
            </Typography>
            </Box>
            <Typography color='#CED3DD'>&bull;</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <BathtubIcon color="disabled" style={{fontSize:"15px"}}/>
            <Typography variant="body2" color="#4E5A6B" fontSize="13px" fontWeight="bold">
                2
            </Typography>
            </Box>
            <Typography color='#CED3DD'>&bull;</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HomeIcon color="disabled" style={{fontSize:"15px"}}/>
            <Typography variant="body2" color="#4E5A6B" fontSize="13px" fontWeight="bold">
                2BHK
            </Typography>
            </Box>
            <Typography color='#CED3DD'>&bull;</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapOutlinedIcon color="disabled" style={{fontSize:"15px"}}/>
            <Typography variant="body2" color="#4E5A6B" fontSize="13px" fontWeight="bold">
                2000 Sq.Ft
            </Typography>
            </Box>
        </Box>
        <Divider/>
        {/* Handbook Checkbox */}
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"space-between" }}>
          <Box sx={{display:"flex"}}>
          <BookOutlinedIcon/>
          <Typography variant="body2">Handbook</Typography>
          </Box>
        {/* Download Link */}
        <Typography fontSize="13px" color="#5078E1" sx={{ cursor: 'pointer' }}>
          View / Download
        </Typography>
        </Box>
      </Box>
    </Grid>

    {/* Right Section (Pricing Details) */}
    <Grid item width="49%">
     <Grid  bgcolor="#F8F9FB" borderRadius="4px" padding="10px">
      <Box sx={{ display: 'flex',flexDirection: 'column', gap: 2 }}>
        <Typography color='#091B29' fontSize="14px" textTransform="uppercase" fontWeight="bold">
            Unit Pricing Details
        </Typography>
        {Array.from({ length: 4 }).map((_, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Box>
              <Typography fontSize="13px" color='#4E5A6B' >Bill Name Here</Typography>
            </Box>
            <Typography fontSize="13px" color='#4E5A6B' fontWeight="bold">$1,000</Typography>
          </Box>
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Box>
              <Typography fontSize="13px" color='#4E5A6B' >Amenity Name Here</Typography>
            </Box>
            <Typography fontSize="13px" color='#4E5A6B' fontWeight="bold">$1,000</Typography>
          </Box>
        ))}
        {/* Final Total */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between',borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    marginTop: 16,bgcolor:"#E4E8EE",padding:"8px" ,borderRadius:"6px",border:"none"}}>
          <Typography fontSize="13px" fontWeight="bold">Final Total</Typography>
          <Typography fontSize="13px" fontWeight="bold">$1,200</Typography>
        </Box>
      </Box>
    </Grid>
    <Button
            onClick={handleCloseRemoveDialog}
            variant="contained"
            sx={{ width: '100%', backgroundColor: '#5078E1', textTransform: 'none', marginTop:"10px",fontWeight: 600 }}
          >
            Update & Save
    </Button> 
    </Grid>
    </Grid>
    </DialogContent>

      </Dialog>
    </div>
  )
}

export default RemoveComponentDialogBox
