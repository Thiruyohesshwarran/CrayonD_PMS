import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Select, Paper, ClickAwayListener, List, ListItem,Stack,ToggleButton,linearProgressClasses, 
    ListItemText, ListItemIcon, Icon, InputAdornment , FormControl ,OutlinedInput,LinearProgress,FormHelperText,
    Typography,MenuItem} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DropDownBox from './DropDownBox';

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

  // toggle button revenue
  const [revenueAlignment, setRevenueAlignment] = useState('Lease');

  const handleChange = (newRevenueAlignment) => {
    setRevenueAlignment(newRevenueAlignment);
  };

  const revenuetype = [
    { value: 'Lease', label: 'Lease' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Manage', label: 'Manage' },
  ];

  //toggle button componentbasedon
  const [componentBasedOnAlignment,setComponentBasedOnAlignment]=useState('Amount');

  const handleChangeComponentBasedOn = (measureunit) => {
    setComponentBasedOnAlignment(measureunit);
  }

  const componentbasedontype = [
    {value:"Amount", label:"Amount"},
    {value:"UOM", label:"UOM"},
  ];

  //dropdowm pricing component
  const [pricing, setPricingComponent] = useState("Pricing1");

  const handleChangePricing = (event) => {
    setPricingComponent(event.target.value);
  };

  //dropdown tax component
  const [tax,setTax] = useState("GST");

  const handleTax = (event) => {
    setTax(event.target.value);
  }

  const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    width:115,
    borderRadius: 2,
    marginBottom:5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 2,
      backgroundColor:"#FF4B4B",
    },
  }));

  const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    width:115,
    borderRadius: 2,
    marginBottom:5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 2,
      backgroundColor:"#5AC782",
    },
  }));

  const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    width:115,
    borderRadius: 2,
    marginBottom:5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 2,
      backgroundColor:"#FF9340",
    },
  }));

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
        {selectedComponent ? (
            <Box sx={{height:"98%",width:"100%"}}>
            <ListItem style={{ backgroundColor: '#FEEAEA80',padding:"10px 10px",marginBottom:'15px',borderRadius:'6px'}}>
                <ListItemText primary="Primary Pricing Component" 
                    primaryTypographyProps={{ sx: { fontSize: '13px',color:"#B3776D",fontWeight:"bold" } }} />
                <ListItemIcon>
                <LightTooltip title="Base rent or monthly rent amount. you can have 
                                only one primary pricing component per property." placement="top">
                <Icon sx={{
                                color: '#CED3DD', '&:hover':{color:"#4E5A6B"}, 
                            }}><InfoOutlinedIcon fontSize='small'/></Icon>
                </LightTooltip>
                </ListItemIcon>
            </ListItem>
            <Box sx={{display:"flex",width:"100%",marginBottom:"20px"}}>
            <Box sx={{width:"50%"}}>
            <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Revenue Type</Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
  {revenuetype.map((child) => (
    <ToggleButton
      key={child.value}
      value={child.value}
      selected={revenueAlignment === child.value}
      onChange={() => handleChange(child.value)} 
      sx={{
        backgroundColor: revenueAlignment === child.value ? 'blue' : 'white',
        color: revenueAlignment === child.value ? 'grey' : 'black',
        '&.Mui-selected': {
          backgroundColor: '#5078E1 !important',
          color: '#FFFFFF !important',
        },
        border: "1px solid #E4E8EE",
        borderRadius: '4px',
        padding: '6px 8px',
        textAlign: 'center',
        textTransform:"none",
        fontSize:"13px !important",
      }}
    >
      {child.label}
    </ToggleButton>
  ))}
</Stack>
            </Box>
            <Box sx={{width:"50%",display:"flex",flexDirection:"column"}}>
            <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Pricing Component</Typography>
            <FormControl>
              <Select
                value={pricing}
                onChange={handleChangePricing}
                sx={{height:"35px",border:"1px solid #E4E8EE"}}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="Pricing1">Pricing Component</MenuItem>
                <MenuItem value="Pricing2">Pricing Component 2</MenuItem>
                <MenuItem value="Pricing3">Pricing Component 3</MenuItem>
              </Select>
            </FormControl>
            </Box>
            </Box>
            <Box sx={{display:"flex",width:"100%",marginBottom:"20px"}}>
            <Box sx={{width:"50%"}}>
            <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Tax Group For Pricing Component</Typography>
            <FormControl sx={{minWidth:180}}>
              <Select
                value={tax}
                onChange={handleTax}
                sx={{height:"35px",border:"1px solid #E4E8EE"}}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="GST">GST</MenuItem>
                <MenuItem value="CGST">CGST</MenuItem>
                <MenuItem value="SGST">SGST</MenuItem>
              </Select>
            </FormControl>
            </Box>
            <Box sx={{width:"50%",display:"flex",flexDirection:"column"}}>
            <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Component Based On</Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
  {componentbasedontype.map((child) => (
    <ToggleButton
      key={child.value}
      value={child.value}
      selected={componentBasedOnAlignment === child.value}
      onChange={() => handleChangeComponentBasedOn(child.value)} 
      sx={{
        backgroundColor: componentBasedOnAlignment === child.value ? 'blue' : 'white',
        color: componentBasedOnAlignment === child.value ? 'grey' : 'black',
        '&.Mui-selected': {
          backgroundColor: '#5078E1 !important',
          color: '#FFFFFF !important',
        },
        border: "1px solid #E4E8EE",
        borderRadius: '4px',
        padding: '6px 8px',
        textAlign: 'center',
        textTransform:"none",
        fontSize:"13px !important",
      }}
    >
      {child.label}
    </ToggleButton>
  ))}
</Stack>
            </Box>
            </Box>
            <Box sx={{width:"100%",marginBottom:"20px"}}>
            <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>UOM Value</Typography>
            <FormControl sx={{width: '100%'}} variant="outlined">
            <OutlinedInput
            id="outlined-adornment-weight" sx={{border: "1px solid #E4E8EE",
                borderRadius:"4px",height:"40px"}}
            endAdornment={<InputAdornment position="end">
                <Typography sx={{ color: "#98A0AC", fontSize: "13px"}}>
                    SAR/ Total
                </Typography>
                           </InputAdornment>}/>
            </FormControl>
            </Box>
            <Box sx={{width:"100%",display:"flex",marginBottom:"20px"}}>
                <Box sx={{width:"33%"}}>
                    <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Maximum</Typography>
                    <BorderLinearProgress1 variant="determinate" value={100}/>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <Typography sx={{ color: "#091B29", fontSize: "13px" }}>
                              $
                            </Typography>
                          </InputAdornment>
                        }
                        sx={{
                            height:"40px",
                            width:115,
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text" sx={{fontSize:"10px"}}>
                        Sq. Yard/Monthly
                    </FormHelperText>
                </Box>
                <Box sx={{width:"33%"}}>
                    <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Recommended</Typography>
                    <BorderLinearProgress2 variant="determinate" value={70} />
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <Typography sx={{ color: "#091B29", fontSize: "13px" }}>
                              $
                            </Typography>
                          </InputAdornment>
                        }
                        sx={{
                            height:"40px",
                            width:115,
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text" sx={{fontSize:"10px"}}>
                        Sq. Yard/Monthly
                    </FormHelperText>
                </Box>
                <Box sx={{width:"33%"}}>
                    <Typography sx={{fontSize:"12px",color:"#98A0AC",marginBottom:"5px"}}>Minimum</Typography>
                    <BorderLinearProgress3 variant="determinate" value={30} />
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        startAdornment={
                          <InputAdornment position="start">
                            <Typography sx={{ color: "#091B29", fontSize: "13px" }}>
                              $
                            </Typography>
                          </InputAdornment>
                        }
                        sx={{
                            height:"40px",
                            width:115,
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text" sx={{fontSize:"10px"}}>
                        Sq. Yard/Monthly
                    </FormHelperText>
                </Box>
            </Box>
            <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <Button variant='outlined' sx={{textTransform:"none",color:"#091B29",fontSize:"13px",border:"1px solid #E4E8EE",
                                fontWeight:"bold",borderRadius:"4px",paddingY:"6px"}}
                                onClick={()=>setSelectedComponent(null)}>
                Back
            </Button>
            <Button variant='contained' sx={{textTransform:"none",backgroundColor:"#5078E1",fontSize:"13px",fontWeight:"bold",
                borderRadius:"4px",marginLeft:"15px",boxShadow:"none"}}>
                Create Pricing Component
            </Button>
            </Box>
            </Box>
        ):(
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
