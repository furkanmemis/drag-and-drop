import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface LayerProps {
  items: string[];
  onChangeDelete: (approve: boolean, index: number) => void;
}

const Layers: React.FC<LayerProps> = ({ items, onChangeDelete}) => {
  const [allComponent, setAllComponent] = useState<string[]>([]);
  const [deleteApprove, setDeleteApprove] = useState<boolean>(false);
  const [deletedIndex, setDeletedIndex] = useState<number>(-1);

  useEffect(() => {
    setAllComponent(items);
  }, [items]);

  const deleteItem = (removedIndex: number) => {
    if(deleteApprove && deletedIndex !== -1){
      const allItem = allComponent.filter((_, index) => index !== removedIndex);
      setAllComponent(allItem);

      setTimeout(()=>{
        setDeleteApprove(false);
        setDeletedIndex(-1);
      },50);
    }

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
          <IconButton onClick={()=>{setDeleteApprove(true);setDeletedIndex(index); deleteItem(index); onChangeDelete(true,index)}}>
            <DeleteIcon style={{ color: "#B03A2E" }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Layers;
