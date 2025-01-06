import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Typography, Box, Button } from "@mui/material";
import { StyleItem } from "../Models/StyleItem";
import { downloadJson } from "../services/DownloadJSON";

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
        downloadJson(download);
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
                <Button variant="contained" style={{backgroundColor: "black", color: "white", borderRadius: "20px"}} onClick={()=>{handleDownload()}}>
                    Export
                </Button>
            </Box>
        </Box>
    );
};

export default Navbar;