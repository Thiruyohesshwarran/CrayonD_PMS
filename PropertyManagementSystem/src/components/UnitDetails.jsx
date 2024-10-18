import { Box } from "@mui/material";
import { React, useState, useRef, useEffect } from "react";
// import "./unitdetails.css";
// import { BiBed } from "react-icons/bi";
// import { PiBathtubLight } from "react-icons/pi";
// import { GoHome } from "react-icons/go";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
// import { FaPlus } from "react-icons/fa6";
// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// import { HiOutlineTrash } from "react-icons/hi2";
// // import House from "../../assets/image.png";
// import Maindetails from "../Mainunitdetail/Mainunitdetail";
// import Pricing from "../Pricing/Pricing";
// import AddAminities from "../AddAminities/AddAminities";
// import AddUtilities from '../AddUtilities/AddUtilities';
// import Adddiscount from '../ApplyDiscount/ApplyDiscount';
// import Addremove from '../RemoveAmmunity/RemoveAmmunity'

export default function Unitdetails() {
  const [addPricing, setAddPricing] = useState(false);
  const [openAminitiesDialog, setOpenAminitiesDialog] = useState(false);
  const [openUtilities, setopenUtilities] = useState(false);
  const [openDiscount, setopenDiscount] = useState(false);
  const [openremove, setopenremove] = useState(false);
  const [selectedEstate, setSelectedEstate] = useState(null);
  const detailsRef = useRef(null);

  const Estates = [
    {
      id: 1,
      house: House,
      name: "Jumeirah Estate",
      sale: 1200,
      subname: "Jumeirah Golf Estate",
      area: "2000",
      bed: 2,
      tub: 2,
      bhk: 2,
    },
    {
      id: 2,
      house: House,
      name: "Palm Jumeirah",
      sale: 1500,
      subname: "Palm Island Estate",
      area: "2500",
      bed: 3,
      tub: 3,
      bhk: 3,
    },
    
  ];

  const handleSelectEstate = (estate) => {
    setSelectedEstate(estate);
  };

  const handleBack = () => {
    setSelectedEstate(null);
  };

  const handleAddPricing = (popupState) => {
    setAddPricing(true);
    popupState.close(); 
  };

  const handleAddAminities = (popupState) => {
    setOpenAminitiesDialog(true);
    popupState.close(); 
  };

  const handleAddUtilities = (popupState) => {
    setopenUtilities(true);
    popupState.close(); 
  };
  const handleAddDiscount = (popupState) => {
    setopenDiscount(true);
    popupState.close(); 
  };

  const handleAddremove = (popupState) => {
    setopenremove(true);
    popupState.close(); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setSelectedEstate(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box className="units-container">
        {selectedEstate ? (
          <Box ref={detailsRef}>
            <Maindetails estate={selectedEstate} onBack={handleBack} />
          </Box>
        ) : (
          <>
            <Box className="units-title">Unit Details</Box>
            <Box className="unit-all-estates">
              {Estates.map((estate) => (
                <Box key={estate.id} className="unit-estate">
                  <Box className="unit-img-container" onClick={() => handleSelectEstate(estate)}>
                    <img src={estate.house} className="unit-img" alt="estate-img" />
                    <HiOutlineTrash className="unit-trash" />
                  </Box>
                  <Box className="unit-details">
                    <Box className="unit-estatename">
                      <Box>{estate.name}</Box>
                      <Box>$ {estate.sale}</Box>
                    </Box>
                    <Box className="unit-estate-subdetails">
                      <Box>{estate.subname}</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>{estate.area} Sq.Ft</Box>
                    </Box>
                    <Box className="unit-estate-quantities">
                      <BiBed />
                      <Box>{estate.bed}</Box>
                      <Box className="leaddetail-dot"></Box>
                      <PiBathtubLight />
                      <Box>{estate.tub}</Box>
                      <Box className="leaddetail-dot"></Box>
                      <GoHome />
                      <Box>{estate.bhk} BHK</Box>
                    </Box>
                    <Box className="estate-customise" sx={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                          <Box>
                            <Typography sx={{ display: "flex", gap: "7px" }} variant="contained" {...bindTrigger(popupState)}>
                              <FaPlus />
                              <Box>Customise</Box>
                            </Typography>
                            <Popover
                              {...bindPopover(popupState)}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <Box sx={{ p: 1, px: 2, width: "120px", fontSize: "12px", borderBottom: "1px solid #E4E8EE", pb: 1, mx: 2 }} onClick={() => handleAddPricing(popupState)}>
                                Add Pricing Component
                              </Box>
                              <Box sx={{ p: 1, px: 2, width: "120px", borderBottom: "1px solid #E4E8EE", fontSize: "12px", pb: 1, mx: 2 }} onClick={() => handleAddAminities(popupState)}>
                                Add Amenities
                              </Box>
                              <Box sx={{ p: 1, px: 2, width: "120px", borderBottom: "1px solid #E4E8EE", fontSize: "12px", pb: 1, mx: 2 }} onClick={() => handleAddUtilities(popupState)}>
                                Add Utilities
                              </Box>
                              <Box sx={{ p: 1, px: 2, width: "120px", borderBottom: "1px solid #E4E8EE", fontSize: "12px", pb: 1, mx: 2 }} onClick={() => handleAddDiscount(popupState)}>
                                Add Discount
                              </Box>
                              <Box sx={{ p: 1, px: 2, width: "120px", fontSize: "12px", mx: 2 }} onClick={() => handleAddremove(popupState)}>
                                Remove Component
                              </Box>
                            </Popover>
                          </Box>
                        )}
                      </PopupState>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>

      {addPricing && <Pricing openPricingDialog={addPricing} setOpenPricingDialog={setAddPricing} />}
      {openAminitiesDialog && <AddAminities openAminitiesDialog={openAminitiesDialog} setOpenAminitiesDialog={setOpenAminitiesDialog} />}
      {openUtilities && <AddUtilities openUtilityDialog={openUtilities} setOpenUtilityDialog={setopenUtilities} />}
      {openDiscount && <Adddiscount openDialogDialog={openDiscount} setOpenDialogDialog={setopenDiscount} />}
      {openremove && <Addremove openRemoveDialog={openremove} setOpenRemoveDialog={setopenremove} />}
    </>
  );
}