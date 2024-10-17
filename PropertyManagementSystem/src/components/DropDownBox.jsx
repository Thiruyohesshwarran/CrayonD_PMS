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

      const MenuButton = styled(BaseMenuButton)(`
        font-family: 'Nunito Sans';
        font-weight: 600;
        font-size: 13px;
        line-height: 1.5;
        padding: 6px 16px;
        display: flex; 
        align-items: center;
        gap:30px;
        border-radius: 8px;
        transition: all 150ms ease;
        cursor: pointer;
        background: #f5f7fa;
        border: 1px solid #e4e8ee;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        color: #1c1c1c;
      `);       

  return (
   <div>
   <Dropdown>
      <MenuButton>
        Casagrand
        <ExpandMoreIcon fontSize="medium"/>
      </MenuButton>
      <Menu>
        <MenuItem onClick={createHandleMenuClick('Csagrand')}>Casagrand</MenuItem>
        <MenuItem onClick={createHandleMenuClick('G-Square')}>G-Square</MenuItem>
      </Menu>
    </Dropdown>
   </div>
  )
}

export default DropDownBox
