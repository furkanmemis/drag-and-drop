import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Typography, Box, Button } from "@mui/material";
import { StyleItem } from "../Models/StyleItem";

interface NavbarProps{
    list: StyleItem[];
}

const Navbar: React.FC<NavbarProps> = ({list}) => {

    const [styleList,setStyleList] = useState<StyleItem[]>([]);

    useEffect(()=>{
        setStyleList(list);
    },[list]);


    const handleDownload = () => {

        let download = {
            "elements": styleList
        }
    
        const blob = new Blob([JSON.stringify(download, null, 2)], {
          type: "application/json",
        });
    
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement("a");
        link.href = url;
        link.download = "style.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        URL.revokeObjectURL(url);
      };

    return (
        <Box 
            sx={{
                display: "flex", 
                backgroundColor: "whitesmoke", 
                position: "sticky", 
                zIndex: 1000,
                padding: "8px",
                width: "100%",
                border: "2px solid rgba(0, 0, 0, 0.2)"
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexGrow: 1, ml: 1 }}>
                <HomeIcon />
                <Typography sx={{ marginLeft: "8px" }} variant="body1">Home</Typography>
            </Box>

            <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "2%"}}>
                <Button variant="contained" style={{backgroundColor: "black", color: "white", borderRadius: "20px"}}>
                    Clear
                </Button>
            </Box>

            <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "2%"}}>
                <Button variant="contained" style={{backgroundColor: "black", color: "white", borderRadius: "20px"}} onClick={()=>{handleDownload()}}>
                    Export
                </Button>
            </Box>
        </Box>
    );
};

export default Navbar;