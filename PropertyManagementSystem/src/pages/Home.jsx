import React from 'react';
import Grid from '@mui/material/Grid2';
import Sidebar from '../components/Sidebar';
import { Box, Button} from '@mui/material';
import Logo from '../assets/logo.png';
import Prospect from '../assets/prospect.png'
import DropDownBox from '../components/DropDownBox';
import {Typography,Paper,Avatar} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import TableHead from '@mui/material/TableHead';
import SearchBar from '../components/SearchBar';
import {IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Bell from '../assets/Bell.svg';
import UnitDetailsPage from '../components/UnitDetailsPage';

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
            <Box sx={{marginLeft:"125px",height:"100%",display:"flex",alignItems:"center"}}><SearchBar/>
			      </Box>
            <Box sx={{display:"flex",alignItems:"center",marginRight:"15px",marginLeft:"265px"}}>
              <img src={Bell} alt="xyz"/>
            </Box>
            <Box sx={{ display: 'flex',height:"100%", alignItems:'center',borderLeft:'2px solid white' }}>
          <Avatar
            alt="Bala Ganesh"
            src="https://via.placeholder.com/40" 
            sx={{ marginLeft: 2 }}
          />
          <Box sx={{display:'flex',flexDirection:'column'}}>
          <Typography variant="body1" sx={{ marginLeft: 1,fontSize:'13px' }}>
            Bala Ganesh
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa', marginLeft: 1 ,fontSize:'13px' }}>
            Super Admin
          </Typography>
          </Box>
         
          <IconButton color="inherit" sx={{marginLeft:'10px'}}>
            <ExpandMoreIcon />
          </IconButton>
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
                <Box bgcolor="white" sx={{width:"100%",height:"10%",borderBottom:"1px solid #e7ebf0",paddingX:"20px",fontSize:"13px",fontWeight:"600",boxSizing:"border-box",
                      borderTopLeftRadius:"12px",borderTopRightRadius:"12px",color:"#5078E1",display:"flex",alignItems:"center",}}>
                        Add Contact &gt; Lead Details &gt; Preview and Create Lead &gt; Quotation Details &gt; 
                        <Box sx={{height:"24px",fontSize:"11px",color:"white",width:"24px",boxSizing:"border-box",marginX:"5px",border:"2px solid #CBD7F6",backgroundColor:"#5078E1",borderRadius:"50%",
                                  display:"flex",alignItems:"center",justifyContent:"center"}}>
                          4
                        </Box> Preview and Create
                </Box>
                <Box sx={{width:"100%",height:"75%",display:"flex"}}>
                  <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%",paddingX:"10px",paddingLeft:"25px",boxSizing:"border-box",paddingTop:"15px"}}>
                    <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>
                      Lead Details
                  <Box sx={{paddingBottom:"18px",marginBottom:"18px",borderBottom:"1px solid #E4E8EE"}}>
                  <Box sx={{ display: "flex", marginTop: "15px", alignItems: "center",border:"1px solid #E4E8EE",borderRadius:"4px",padding:"10px"}}>
                    <Avatar src={Prospect} sx={{ width: 25, height: 25, marginRight: "10px",objectFit:"cover" }} />
                    <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                      <Typography variant="subtitle1" color="#091B29" fontWeight="bold" fontSize="13px">Tom Cruise</Typography>
                      <Box sx={{marginLeft:"8px",padding:"3px",bgcolor:"#5078E11E",borderRadius:"4px"}}>
                        <Typography variant="body2" color="#091B29" fontWeight="bold" fontSize="10px">Prospect</Typography></Box>
                      </Box>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                      <Typography variant="body2" color="textSecondary" fontSize="11px">+91 9090808012</Typography>
                      <Typography variant="body2" color="textSecondary" fontSize="11px" marginLeft="8px">Tomcruise2515@mail.com</Typography>
                    </Box>
                    </Box>
                  </Box>
                  </Box>
                      Quotation Details
                      <Box sx={{display:"flex", justifyContent:"space-between",marginTop:"10px",marginBottom:"20px"}}>
                      <Box>
                      <Box sx={{fontSize:"7px", color:"#98A0AC", marginBottom:"5px"}}>LEASE START DATE</Box>
                      <Box sx={{fontSize:"11px", color:"#091B29"}}>30 Jan 22</Box>
                      </Box>
                      <Box>
                      <Box sx={{fontSize:"7px", color:"#98A0AC", marginBottom:"5px"}}>LEASE END DATE</Box>
                      <Box sx={{fontSize:"11px", color:"#091B29"}}>30 Jan 23</Box>
                      </Box>
                      <Box>
                      <Box sx={{fontSize:"7px", color:"#98A0AC", marginBottom:"5px"}}>RENT START DATE</Box>
                      <Box sx={{fontSize:"11px", color:"#091B29"}}>30 Jan 23</Box>
                      </Box>
                      </Box>
                      <Box>
                      <Box sx={{fontSize:"7px", color:"#98A0AC", marginBottom:"5px"}}>GRACE PERIOD</Box>
                      <Box sx={{fontSize:"11px", color:"#091B29"}}>90 Days(Beginning)</Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box bgcolor="#f6f8fa" sx={{height:"100%",width:"40%",paddingX:"10px",boxSizing:"border-box",paddingTop:"15px"}}>
                    <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>Unit Details<UnitDetailsPage/></Box>
                  </Box>

                  {/* quotation summary */}
                  <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%",paddingX:"10px",
                          boxSizing:"border-box",paddingTop:"15px"}}>
                    <Box sx={{fontSize:"13px",color:"#4E5A6B",fontWeight:"bold"}}>
                      Quotation Summary
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          marginTop:"15px",
                          width: '90%',                  
                          bgcolor: 'white',
                          borderRadius: '4px',
                          padding: '0px 10px 10px ',
                          backgroundColor: '#f5f7fa',
                        }}
                      >    
                        <Box sx={{ flexGrow: 1 ,fontSize:"13px"}}>
                          <TableContainer>
                            <Table size="small" aria-label="quotation details">
                              <TableHead>
                                <TableRow>
                                  <TableCell
                                    sx={{
                                      fontSize: '10px',
                                      color: '#6B7280',
                                      fontWeight: '600',
                                      padding: '8px 10px',
                                      fontFamily: "Nunito Sans",
                                    }}
                                  >
                                    DESCRIPTION
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    sx={{
                                      fontSize: '10px',
                                      color: '#6B7280',
                                      fontWeight: '600',
                                      padding: '8px 10px',
                                      fontFamily: "Nunito Sans",
                                    }}
                                  >
                                    QTY
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{
                                      fontSize: '10px',
                                      color: '#6B7280',
                                      fontWeight: '600',
                                      padding: '8px 10px',
                                      fontFamily: "Nunito Sans",
                                    }}
                                  >
                                    AMOUNT
                                  </TableCell>
                                </TableRow>
                              </TableHead>                               
                              <TableBody>
                                <TableRow>
                                  <TableCell
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans", fontWeight: 'bold' }}
                                  >
                                    Total Amount
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    3
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{ fontWeight: 'bold', fontSize: '13px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    $ 3,600.00
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontWeight: 'bold', fontFamily: "Nunito Sans" }}
                                  >
                                    Total Discount
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    10%
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{ fontSize: '13px', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    - $ 100.00
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell colSpan={3} sx={{ padding: 0 }}>
                                    <Divider />
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans", fontWeight: 'bold' }}
                                  >
                                    Total Refundable
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    0%
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{ fontWeight: 'bold', fontSize: '13px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    $ 0
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell colSpan={3} sx={{ padding: '0' }}>
                                    <Divider />
                                  </TableCell>
                                </TableRow>

                                <TableRow>
                                  <TableCell
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontWeight: 'bold', fontFamily: "Nunito Sans" }}
                                  >
                                    Total Tax
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px', color: '#6B7280', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    18%
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{ fontWeight: 'bold', fontSize: '13px', color: '#1F2937', borderBottom: 'none', padding: '8px 0', fontFamily: "Nunito Sans" }}
                                  >
                                    $ 648.00
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell colSpan={3} sx={{ padding: 0 }}>
                                    <Divider/>
                                  </TableCell>
                                </TableRow>
                              </TableBody>                  
                            </Table>
                          </TableContainer>
                        </Box>

                        <Box>
                          <Divider sx={{ marginY: 2, marginTop:14 }} />
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            sx={{
                              fontWeight: 'bold',
                              fontSize: '13px',
                              color: '#1F2937',
                            }}
                          >
                            <Box>Quote Amount</Box>
                            <Box>$ 4,148.00</Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box> 


                </Box>
                <Box sx={{width:"100%",height:"15%",boxSizing:"border-box",paddingX:"20px",paddingTop:"15px",bgcolor:"#ffffff",
                      borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px",position:"relative"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Box>
                        <Button variant="outlined" sx={{textTransform:"none",color:"#091B29",fontSize:"13px",border:"1px solid #E4E8EE",
                                fontWeight:"bold",borderRadius:"8px"}}>
                          Previous
                        </Button>
                        </Box>
                        <Box>
                        <Button variant='outlined' sx={{textTransform:"none",color:"#091B29",fontSize:"13px",border:"1px solid #E4E8EE",
                                fontWeight:"bold",borderRadius:"8px",paddingY:"6px"}}>
                          Cancel
                        </Button>
                        <Button variant='contained' sx={{textTransform:"none",backgroundColor:"#5078E1",fontSize:"13px",fontWeight:"bold",
                          borderRadius:"8px",marginLeft:"15px"}}>
                          Create Quotation
                        </Button>
                        </Box>
                        </Box>
                </Box>
                </Box>
              </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
