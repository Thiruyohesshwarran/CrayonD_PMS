import React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from './icons/DashboardIcon';
import BuildingIcon from './icons/BuildingIcon';
import TicketIcon from './icons/TicketIcon';
import SettingsIcon from './icons/SettingsIcon';
import DocumentIcon from './icons/DocumentIcon';
import ChatIcon from './icons/ChatIcon';
import CloudUploadIcon from './icons/CloudUploadIcon';
import PersonIcon from './icons/PersonIcon';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the drawer state
  };
  
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon/> },
    { text: 'Companies', icon: <MailIcon /> },
    { text: 'Owners', icon: <PersonIcon/> },
    { text: 'Properties', icon: <BuildingIcon/> },
    { text: 'Pricing', icon: <TicketIcon/> },
    { text: 'Settings', icon: <SettingsIcon/> },
    { text: 'Data Management', icon: <CloudUploadIcon /> },
    { text: 'Reports', icon: <MailIcon /> },
    { text: 'Documentation', icon: <DocumentIcon/> },
    { text: 'Communication', icon: <ChatIcon/> }
  ];

  return (
    <div>
       <Box sx={{ display: 'flex',height:"100%"}}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}> 
            {open ? <Typography sx={{fontSize:"12px",color:"black",fontWeight:'bold'}}>Property Manager For Start-up</Typography> 
                      : <ChevronRightIcon />} 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  {menuItems.map((item, index) => (
    <ListItem key={item.text} disablePadding sx={{ display: 'block',fontSize:"13px",color:"#C1C5CB" }}>
      <ListItemButton
        sx={{
          minHeight: 40,
          px: 2.5,
          justifyContent: open ? 'initial' : 'center',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
            mr: open ? 3 : 'auto',
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>
      </Drawer>
    </Box>
    </div>
  )
}

export default Sidebar
