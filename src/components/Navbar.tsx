import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Typography, Box, Button } from "@mui/material";

const Navbar: React.FC = () => {
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
                    Export
                </Button>
            </Box>
        </Box>
    );
};

export default Navbar;