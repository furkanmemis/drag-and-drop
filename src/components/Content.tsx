import React from "react";
import { Box } from "@mui/material";


const Content: React.FC = () =>{
    return(
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFF6",
                minWidth: "60vw",
                borderRight: "2px solid rgba(0, 0, 0, 0.2)",
                height: "100vh",
            }}
        >
            <p>content</p>
        </Box>
    )
}

export default Content;