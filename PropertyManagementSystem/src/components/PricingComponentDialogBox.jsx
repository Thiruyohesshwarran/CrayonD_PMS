import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Popper, Paper, ClickAwayListener, List, ListItem, 
    ListItemText, ListItemIcon, Icon } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PricingComponentDialogBox = ({ StyledListItem }) => {
  // for add pricing component
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle opening the dialog
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedComponent(null);
  };

  const handleChevronClick = (component) => {
    setSelectedComponent(component);
  };

  const [selectedComponent, setSelectedComponent] = useState(null);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: "0px 10px 25px #0000000A",
      fontSize: 11,
      padding: "10px",
      border: "1px solid #E4E8EE",
      borderRadius: "8px",
      position: "relative",
    },
  }));

  // Array of pricing components
  const pricingComponents = [
    { id: 1, label: "01 Primary", bgColor: '#FEEAEA80', textColor: '#B3776D' },
    { id: 2, label: "02 Secondary", bgColor: '#EDE4FE80', textColor: '#896DB3' },
    { id: 3, label: "03 One Time Charges", bgColor: '#DBF0F180', textColor: '#6DAFB3' },
    { id: 4, label: "04 Refundables", bgColor: '#E4EDFF80', textColor: '#6D80B3' },
    { id: 5, label: "05 Inventory Item", bgColor: '#FFFAD880', textColor: '#B3A16D' },
    { id: 6, label: "06 Parking Slot", bgColor: '#FEEAEA80', textColor: '#B3776D' }
  ];

  return (
    <div>
      <StyledListItem onClick={handleDialogOpen}>Add Pricing Component</StyledListItem>

      <Dialog open={openDialog} onClose={handleDialogClose} 
        sx={{ '& .MuiDialog-paper': { width: '450px', height: '550px' } }}>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", m: 0, p: 1 }}>
          <Box sx={{ fontSize: "13px", color: "#091B29", fontWeight: "800", paddingLeft: "15px" }}>Pricing Table</Box>
          <Button onClick={handleDialogClose} color="#7C8594">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <Divider />
        <DialogContent>
        {selectedComponent ? (<Box>Detailed Contents</Box>):(
          <List>
            {pricingComponents.map((component) => (
              <ListItem key={component.id} 
                style={{ backgroundColor: component.bgColor, padding: "18px 10px", marginBottom: '10px', borderRadius: '8px' }}>
                <ListItemText primary={component.label}
                  primaryTypographyProps={{ sx: { fontSize: '13px', color: component.textColor } }} />
                <ListItemIcon>
                  <LightTooltip title="Base rent or monthly rent amount. You can have only one primary pricing component per property." placement="top">
                    <Icon sx={{
                      color: '#CED3DD', '&:hover': { color: "#4E5A6B" },
                    }}><InfoOutlinedIcon fontSize='small' /></Icon>
                  </LightTooltip>
                </ListItemIcon>
                <ChevronRightIcon sx={{ color: component.textColor }} onClick={() => handleChevronClick(component)} />
              </ListItem>
            ))}
          </List>
        )}
        </DialogContent>
      </Dialog>

      
    </div>
  )
}

export default PricingComponentDialogBox;
