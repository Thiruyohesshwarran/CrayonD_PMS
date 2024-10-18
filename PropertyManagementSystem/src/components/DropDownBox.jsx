import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

function DropDownBox() {
    const createHandleMenuClick = (menuItem) => {
        return () => {
          console.log(`Clicked on ${menuItem}`);
        };
      };
      
      const StyledMenu = styled(Menu)({
        backgroundColor: '#f5f7fa',
        borderRadius: '8px',
      });
      
      const StyledMenuItem = styled(MenuItem)({
        color: '#333', 
        padding: '5px 15px',
        fontWeight: 600,
        display:"flex",
        fontSize: '13px',
        '&:hover': {
          backgroundColor: '#e0e0e0', 
          color: '#000',
        },
      });
      
      const MenuButton = styled(BaseMenuButton)({
        fontWeight: 600,
        fontSize: '13px',
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        borderRadius: '8px',
        transition: 'all 150ms ease',
        cursor: 'pointer',
        background: '#f5f7fa',
        border: '1px solid #e4e8ee',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        color: '#1c1c1c',
      });
      

  return (
   <div>
   <Dropdown>
      <MenuButton>
        Casagrand
        <ExpandMoreIcon fontSize="medium"/>
      </MenuButton>
      <StyledMenu>
        <StyledMenuItem onClick={createHandleMenuClick('Csagrand')}>Casagrand</StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('G-Square')}>G-Square</StyledMenuItem>
      </StyledMenu>
    </Dropdown>
   </div>
  )
}

export default DropDownBox
