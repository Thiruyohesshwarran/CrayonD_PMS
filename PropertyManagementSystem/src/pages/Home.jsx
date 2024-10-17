import React from 'react';
import Grid from '@mui/material/Grid2';
import Sidebar from '../components/Sidebar';
import { Box} from '@mui/material';
import Logo from '../assets/logo.png'
import DropDownBox from '../components/DropDownBox';

function Home() {
  return (
    <div>
      <Grid container sx={{height:"100vh",width:"100%"}}>
        <Grid container bgcolor="#1c1c1c" color="white" sx={{height:"7.5%",width:"100%"}}>
            <Box sx={{height:"100%",display:"flex",alignItems:"center",paddingX:"8px"}}>
              <Box sx={{height:"100%",display:"flex",alignItems:"center",paddingX:"8px"}}>
                <img src={Logo} alt="logo" height="40%" width="110px"/>
              </Box>
              <Box sx={{height:"100%",display:"flex",alignItems:"center",color:"#98A0AC"}}>|</Box>
              <Box sx={{height:"100%",display:"flex",alignItems:"center",color:"#FFFFFF",fontSize:"9px",paddingX:"8px"}}>
                PROPERTY MANAGEMENT SOLUTION
              </Box>
            </Box>
            <Box sx={{height:"100%",display:"flex",alignItems:"center"}}>Search
			      </Box>

        </Grid>
        <Grid item color="grey" sx={{height:"93%",width:"100%",display:"flex"}}>
            <Grid item bgcolor="#333333" sx={{height:"100%"}} size={{md:0.65}}>
                <Sidebar/>
            </Grid>
            <Grid item size={{md:11.35}}>
                <Box item bgcolor="#FFFFFF" sx={{height:"7%",paddingX:"30px",display:"flex",justifyContent:"space-between",borderBottom:"1px solid #e7ebf0",alignItems:"center"}}>
                  <Box sx={{height:"100%",display:"flex",alignItems:"center",color:"#071741",fontSize:"15px",textTransform:"capitalize",fontWeight:"bold"}}>Create Quotation to Existing Lead</Box>
                  <Box sx={{height:"50%",display:"flex",alignItems:"center"}}><DropDownBox/></Box>
                </Box>
                <Box  bgcolor="#F5F7FA" sx={{padding:"1%",height:"88%"}}>
                  <Box bgcolor="" boxShadow="0px 0px 16px #00000014" sx={{margin:"1%",width:"98%",height:"100%",borderRadius:"12px"}} >
                  <Box bgcolor="white" sx={{width:"100%",height:"10%",borderBottom:"1px solid #e7ebf0",
                        borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}></Box>
                  <Box sx={{width:"100%",height:"73%",display:"flex"}}>
                    <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%",paddingX:"10px",paddingLeft:"25px",boxSizing:"border-box",paddingTop:"15px"}}>
                      <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>Lead Details</Box>
                    </Box>
                    <Box bgcolor="#f6f8fa" sx={{height:"100%",width:"40%",paddingX:"10px",boxSizing:"border-box",paddingTop:"15px"}}>
                      <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>Unit Details</Box>
                    </Box>
                    <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%",paddingX:"10px",boxSizing:"border-box",paddingTop:"15px"}}>
                      <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>Quotation Summary</Box>
                    </Box>                    
                  </Box>
                  <Box bgcolor="orangered" sx={{width:"100%",height:"13%",marginBottom:"4%",
                        borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}>Buttons</Box>
                  </Box>
                </Box>

            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
