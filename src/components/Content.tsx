import React from "react";
import { Box } from "@mui/material";
import Page from "./Page";


const Content: React.FC = () =>{
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#FFFFF6",
                minWidth: "60vw",
                borderRight: "2px solid rgba(0, 0, 0, 0.2)",
                height: "100vh",
            }}
        >
            <Page/>

        </Box>
    )
}

export default Content;