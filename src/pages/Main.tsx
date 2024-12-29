import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Content from "../components/Content";


const Main: React.FC = () => {
    return(

        <Box
        sx={{
            display: "flex",
        }}
        >
            <Sidebar/>

            <Content/>

            <RightSidebar/>
        </Box>

    )
}


export default Main;