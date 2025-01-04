import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Content from "../components/Content";

const Main: React.FC = () => {

  const [selectedItem, setSelectedItem] = useState<string>("");
  const [add,setAdd] = useState<string>("");

  const handleDrop = (itemId: string) => {
    console.log(`Bırakılan öğe: ${itemId}`);
    setAdd(itemId)
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar newItem={add}/>
      <Content onDrop={handleDrop} onClickSelectedItem={(itemName)=>{setSelectedItem(itemName)}} />
      <RightSidebar selectedItem={selectedItem} />
    </Box>
  );
};

export default Main;
