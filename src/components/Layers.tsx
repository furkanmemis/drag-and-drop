import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface LayerProps {
  items: string[];
}

const Layers: React.FC<LayerProps> = ({ items}) => {
  const [allComponent, setAllComponent] = useState<string[]>([]);

  useEffect(() => {
    setAllComponent(items);
  }, [items]);

  const deleteItem = (removedIndex: number) => {
    const allItem = allComponent.filter((_, index) => index !== removedIndex);
    setAllComponent(allItem);
  };

  const itemName: Record<string, string> = {
    heading: "Heading",
    paragraph: "Paragraph",
    image: "Image",
    video: "Video",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        minWidth: "20vw",
        position: "absolute",
        bottom: 50,
        borderTop: "2px solid rgba(0, 0, 0, 0.3)",
        borderBottom: "2px solid rgba(0, 0, 0, 0.3)",
        width: "100%",
        maxHeight: "30vh",
        overflow: "auto",
      }}
    >
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          borderBottom: "2px solid rgba(0, 0, 0, 0.3)",
        }}
        variant="h6"
      >
        Layers
      </Typography>

      {allComponent.map((component, index) => (
        <Box
          key={index}
          sx={{
            margin: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{itemName[component]}</Typography>
          <IconButton onClick={()=>{deleteItem(index)}}>
            <DeleteIcon style={{ color: "#B03A2E" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Layers;
