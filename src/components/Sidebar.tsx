import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Layers from "./Layers";
import Text from "./Text";
import Media from "./Media";

interface SidebarProps{
    newItem: string;
    onChangeDelete: (approve: boolean, index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({newItem, onChangeDelete}) => {
    const [item, setItem] = useState<string[]>([]);
    useEffect(() => {
        if (newItem !== "") {
            setItem((prevItems) => [...prevItems, newItem]);
        }
    }, [newItem]);


    const deleteItem = (approve: boolean, index: number) => {
        if(approve && index !== -1){
            const newList = item.filter((_,ind) => ind !== index);
            setItem(newList);
            onChangeDelete(approve,index);
        }
    }

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
            <Button variant="contained" size="small" style={{backgroundColor: "#003366", width: "10vw", marginTop: "4%"}}>
                Add Item
            </Button>
            <Text />
            <Media />
            <Layers items={item} onChangeDelete={(approve, index) => {deleteItem(approve,index)}}/>
        </Box>
    );
};

export default Sidebar;