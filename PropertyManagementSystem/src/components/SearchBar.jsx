import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,

	marginLeft: 0,
	width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function SearchBar() {
	{return (
		
		<Search
			sx={{
				height: "30px",
				border: "none",
				width: {
					xs:'330px',md:'320px'
				},
				backgroundColor: "#5D5D5D",
                color:"#CED3DD",
				borderRadius: "4px",
                fontSize:"10px",
                
			}}
		>
			<SearchIconWrapper>
				<SearchIcon style={{color:"#CED3DD",fontSize:"18px"}}/>
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search" 
				inputProps={{ "aria-label": "search",style:{color:"white",fontSize:"13px"} }}
			/>
		</Search>
	);
}

}
