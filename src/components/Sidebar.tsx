import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Layers from "./Layers";
import Text from "./Text";
import Media from "./Media";

const Sidebar: React.FC = () => {
    const [item, setItem] = useState<string[]>([]);

    const addItem = () =>{
        setItem([...item, "Content"])
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#F2FAFF",
                minWidth: "20vw",
                borderRight: "2px solid rgba(0, 0, 0, 0.2)",
                height: "100vh",
                position: "relative",
                alignItems: "center"
            }}
        >
            <Button variant="contained" size="small" style={{backgroundColor: "#003366", width: "10vw", marginTop: "4%"}} onClick={()=>{addItem()}}>
                Add Item
            </Button>
            <Text />
            <Media />
            <Layers items={item} />
        </Box>
    );
};

export default Sidebar;