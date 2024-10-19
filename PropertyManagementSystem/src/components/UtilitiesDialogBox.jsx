import React,{useState} from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    IconButton, Typography, List, ListItem, ListItemText, ListItemAvatar,
    Avatar, Switch, Button, Box
  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlareIcon from '@mui/icons-material/Flare';
import Utility from '../assets/Utility.png';

const utilitiesData = [
    { id: 1, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 2, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 3, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 4, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 5, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 6, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    { id: 7, name: 'Utility name', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', imgSrc: Utility },
    ];

const UtilitiesDialogBox = ({StyledListItem}) => {
    const [openUtility,setOpenUtility] =useState(false);

    const handleOpenUtility = () => setOpenUtility(true);
    const handleCloseUtility = () => setOpenUtility(false);
  return (
    <div>
      <StyledListItem onClick={handleOpenUtility}>Add Utilities</StyledListItem>

      <Dialog open={openUtility} onClose={handleCloseUtility} 
        sx={{ '& .MuiDialog-paper': { width: '400px', height: '600px'}}}>

        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography sx={{ fontWeight: 600,fontSize:"15px",color:"#091B29" }}>Add Utility</Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseUtility}
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
              backgroundColor: '#DBF0F180',
              borderRadius: '8px',
              p: 2,
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,color:"#6DAFB3" }}>
              <FlareIcon/>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                05 Total Utility
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 600,color:"#6DAFB3"}}>
              $200.00
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Available Utility</Typography>
            <List sx={{
                maxHeight: '380px',        
                overflowY: 'auto',         
                '&::-webkit-scrollbar': {
                display: 'none',         
                },
                scrollbarWidth: 'none',    
            }}>
            {utilitiesData.map((utility) => (
              <ListItem
                key={utility.id}
                sx={{ display: 'flex', justifyContent:'space-between',alignItems:'center',border:'1px solid #E4E8EE',
                    padding:'2px 0',marginBottom:"5px",borderRadius:"6px" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ListItemAvatar>
                    <Avatar variant="square" src={utility.imgSrc} alt={utility.name} sx={{paddingLeft:"10px"}} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 600,fontSize:"15px",color:"#091B29" }}>{utility.name}</Typography>}
                    secondary={
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: '#4E5A6B', fontWeight: 500, fontSize:'11px' }}>
                        {utility.price} &bull; {utility.date}
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
            onClick={handleCloseUtility}
            variant="contained"
            sx={{ width: '90%', backgroundColor: '#5078E1', textTransform: 'none', fontWeight: 600 }}
          >
            Update & Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UtilitiesDialogBox
