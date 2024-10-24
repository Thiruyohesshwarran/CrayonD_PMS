import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box,Button, Popper, Paper, ClickAwayListener, List, ListItem, 
    ListItemText,ListItemIcon,Icon } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {Divider} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AmenitiesDialogBox from './AmenitiesDialogBox';
import UtilitiesDialogBox from './UtilitiesDialogBox';
import DiscountDialogBox from './DiscountDialogBox';
import RemoveComponentDialogBox from './RemoveComponentDialogBox';
import PricingComponentDialogBox from './PricingComponentDialogBox';

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
            <List sx={{padding:0}}>
              {/* <StyledListItem onClick={handleDialogOpen}>Add Pricing Component</StyledListItem> */}
              <PricingComponentDialogBox StyledListItem={StyledListItem}/>
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
              {/* <StyledListItem>Remove Component</StyledListItem> */}
              <RemoveComponentDialogBox StyledListItem={StyledListItem}/>
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>


    </div>
  );
};

export default CustomPopperButton;
