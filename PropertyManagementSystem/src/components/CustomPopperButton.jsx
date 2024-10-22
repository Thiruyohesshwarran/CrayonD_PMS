import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box,Button, Popper, Paper, ClickAwayListener, List, ListItem, ListItemText,ListItemIcon,Icon } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {Divider} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AmenitiesDialogBox from './AmenitiesDialogBox';
import UtilitiesDialogBox from './UtilitiesDialogBox';
import DiscountDialogBox from './DiscountDialogBox';

const CustomPopperButton = () => {
  //for customise + popper opening
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent dialog from opening
    setAnchorEl(anchorEl ? null : event.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //for add ֲpricing component
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle opening the dialog
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const StyledListItem = styled(ListItem)(() => ({
    padding: '8px',
    fontSize: '11px',
    color:"#4E5A6B",
    fontWeight:"500",
    '&:hover': {
      backgroundColor: '#e0e0e0', 
      cursor: 'pointer',
    },
  }));

  const open = Boolean(anchorEl);
  const id = open ? 'custom-popper' : undefined;

  return (
    <div>
      <Button
        variant="text"
        sx={{ color: '#5078E1', fontSize: "11px", textTransform: "none" }}
        onClick={handleClick}
      >
        + Customise
      </Button>
      
      {/* Popper component */}
      <Popper id={id} open={open} anchorEl={anchorEl} placement="right">
        <ClickAwayListener onClickAway={handleClose}>
          <Paper sx={{ minWidth: '100px' }}>
            <List>
              <StyledListItem onClick={handleDialogOpen}>Add Pricing Component</StyledListItem>
              <Divider/>
              {/* <StyledListItem>Add Amenities</StyledListItem> */}
              <AmenitiesDialogBox StyledListItem={StyledListItem}/>
              <Divider/>
              {/* <StyledListItem>Add Utilities</StyledListItem> */}
              <UtilitiesDialogBox StyledListItem={StyledListItem}/>
              <Divider/>
              {/* <StyledListItem>Add Discount</StyledListItem> */}
              <DiscountDialogBox StyledListItem={StyledListItem}/>
              <Divider/>
              <StyledListItem>Remove Component</StyledListItem>
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>

      <Dialog open={openDialog} onClose={handleDialogClose} 
        sx={{ '& .MuiDialog-paper': { width: '450px', height: '550px' } }}>
  <DialogTitle sx={{display:"flex",justifyContent:"space-between",alignItems:"center",m:0,p:1}}>
    <Box sx={{fontSize:"13px",color:"#091B29",fontWeight:"800",paddingLeft:"15px"}}>Pricing Table</Box>
    <Button onClick={handleDialogClose} color="#7C8594">
      <CloseIcon/>
    </Button>
  </DialogTitle>
  <Divider />
  <DialogContent>
    <List>
      {/* Primary */}
      <ListItem style={{ backgroundColor: '#FEEAEA80',padding:"18px 10px" ,marginBottom: '10px', borderRadius: '8px'}}>
        <ListItemText primary="01 Primary" 
            primaryTypographyProps={{ sx: { fontSize: '13px',color:"#B3776D" } }} />
        <ListItemIcon>
        <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>

      {/* Secondary */}
      <ListItem style={{ backgroundColor: '#EDE4FE80',padding:"18px 10px" , marginBottom: '10px', borderRadius: '8px' }}>
        <ListItemText primary="02 Secondary" 
            primaryTypographyProps={{ sx: { fontSize: '13px',color:"#896DB3" } }} />
        <ListItemIcon>
        <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>

      {/* One Time Charges */}
      <ListItem style={{ backgroundColor: '#DBF0F180',padding:"18px 10px" , marginBottom: '10px', borderRadius: '8px' }}>
        <ListItemText primary="03 One Time Charges" 
            primaryTypographyProps={{ sx: { fontSize:'13px',color:"#6DAFB3" } }} />
        <ListItemIcon>
        <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>

      {/* Refundables */}
      <ListItem style={{ backgroundColor: '#E4EDFF80',padding:"18px 10px" , marginBottom: '10px', borderRadius: '8px' }}>
        <ListItemText primary="04 Refundables" 
            primaryTypographyProps={{ sx: { fontSize:'13px',color:"#6D80B3" } }} />
        <ListItemIcon>
        <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>

      {/* Inventory Item */}
      <ListItem style={{ backgroundColor: '#FFFAD880',padding:"18px 10px" , marginBottom: '10px', borderRadius: '8px' }}>
        <ListItemText primary="05 Inventory Item" 
            primaryTypographyProps={{ sx: { fontSize: '13px',color:"#B3A16D" } }} />
        <ListItemIcon>
        <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>

      {/* Parking Slot */}
      <ListItem style={{ backgroundColor: '#FEEAEA80',padding:"18px 10px", borderRadius: '8px' }}>
        <ListItemText primary="06 Parking Slot" 
            primaryTypographyProps={{ sx: { fontSize: '13px',color:"#B3776D" } }}/>
        <ListItemIcon>
            <Icon sx={{
                        color: '#CED3DD',  
                    }}><InfoOutlinedIcon/></Icon>
        </ListItemIcon>
        <ChevronRightIcon />
      </ListItem>
    </List>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default CustomPopperButton;
