import React,{useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [plot, setPlot] = useState("Casagrand");

  const handleChangePlot = (event) => {
    setPlot(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={plot}
          onChange={handleChangePlot}
          sx={{height:"32px",width:"160px",backgroundColor:"#F5F7FA",color:'#091B29',
            border: '1px solid #E4E8EE',
            borderRadius: '8px',fontWeight:"600",fontSize:'14px',
          }}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={() => <ExpandMoreIcon sx={{
            color: '#071741', // Change icon color
            fontSize: '20px',
            paddingRight:"10px", // Change icon size
            '&:hover': {
              backgroundColor: 'transparent', // Remove hover effect on the icon
            },
          }}/>}
        >
          <MenuItem value="Casagrand">Casagrand</MenuItem>
          <MenuItem value="GS">G-Square</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
