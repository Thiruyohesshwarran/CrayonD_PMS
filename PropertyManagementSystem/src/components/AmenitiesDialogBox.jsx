import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, Typography, List, ListItem, ListItemText, ListItemAvatar,
  Avatar, Switch, Button, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Amendity from '../assets/Amendity.png';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';

const amenitiesData = [
  { id: 1, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 2, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 3, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 4, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 5, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 6, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  { id: 7, name: 'Amenities name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Amendity },
  ];

const AmenitiesDialogBox = ({ StyledListItem }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <div>
      <StyledListItem onClick={handleOpenDialog}>Add Amenities</StyledListItem>


      <Dialog open={openDialog} onClose={handleCloseDialog} 
        sx={{ '& .MuiDialog-paper': { width: '400px', height: '600px'}}}>

        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography sx={{ fontWeight: 600,fontSize:"15px",color:"#091B29" }}>Add Amenities</Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ '&::-webkit-scrollbar': {
                display: 'none',},
                scrollbarWidth: 'none', } }>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#FEEAEA80',
              borderRadius: '8px',
              p: 2,
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,color:"#B3776D" }}>
              <HouseboatOutlinedIcon/>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                05 Total Amenities
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 600,color:"#B3776D"}}>
              $200.00
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Available Amenities</Typography>
            <List sx={{
                maxHeight: '380px',        
                overflowY: 'auto',         
                '&::-webkit-scrollbar': {
                display: 'none',         
                },
                scrollbarWidth: 'none',    
            }}>
            {amenitiesData.map((amenity) => (
              <ListItem
                key={amenity.id}
                sx={{ display: 'flex', justifyContent:'space-between',alignItems:'center',border:'1px solid #E4E8EE',
                    padding:'2px 0',marginBottom:"5px",borderRadius:"6px" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ListItemAvatar>
                    <Avatar variant="square" src={amenity.imgSrc} alt={amenity.name} sx={{paddingLeft:"10px"}} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 600,fontSize:"15px",color:"#091B29" }}>{amenity.name}</Typography>}
                    secondary={
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: '#4E5A6B', fontWeight: 500, fontSize:'11px' }}>
                        {amenity.price} &bull; {amenity.date}
                    </Typography>
                    </Box>
                    }
                  />
                </Box>
                <Switch />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        {/* Dialog Actions */}
        <DialogActions sx={{display:"flex",justifyContent:"center"}}>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{ width: '90%', backgroundColor: '#5078E1', textTransform: 'none', fontWeight: 600 }}
          >
            Update & Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AmenitiesDialogBox;
