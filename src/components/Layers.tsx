import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface LayerProps{
    items: string[];
}

const Layers: React.FC<LayerProps> = ({items}) => {
  const [allComponent, setAllComponent] = useState<string[]>([]);

  useEffect(()=>{
    setAllComponent(items);
  },[items]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        minWidth: "20vw",
        position: "absolute",
        bottom: 0,
        borderTop: "2px solid rgba(0, 0, 0, 0.3)",
        borderBottom: "2px solid rgba(0, 0, 0, 0.3)",
        width: "100%"
      }}
    >
      <Typography style={{ display: "flex", justifyContent: "center", fontWeight: "bold", borderBottom: "2px solid rgba(0, 0, 0, 0.3)" }} variant="h6">
        Layers
      </Typography>

      {allComponent.map((component, index) => (
        <Box key={index} sx={{ margin: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>{component}</Typography>
          <DeleteIcon style={{ color: "#B03A2E" }} />
        </Box>
      ))}
    </Box>
  );
};

export default Layers;