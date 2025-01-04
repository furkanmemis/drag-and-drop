import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import EditParagraph from "./EditComponents/EditParagraph";
import EditHeading from "./EditComponents/EditHeading";
import EditImage from "./EditComponents/EditImage";
import EditVideo from "./EditComponents/EditVideo";
import Grid from "@mui/material/Grid2";

interface DropTargetProps {
  onDrop: (itemId: string) => void;
}

const Page: React.FC<DropTargetProps> = ({ onDrop }) => {
  const [droppedItems, setDroppedItems] = React.useState<string[]>([]);
  const dropRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: string }) => {
      onDrop(item.id);
      setDroppedItems((prevItems) => [...prevItems, item.id]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop, dropRef]);

  const renderItem = (item: string) => {
    if (item === "paragraph") {
      return (
        <Grid size={12}>
          <EditParagraph />
        </Grid>
      );
    } else if (item === "heading") {
      return(
        <Grid size={12}>
          <EditHeading />
        </Grid>
      )
    } else if (item === "image") {
      return(
        <Grid size={12}>
          <EditImage />
        </Grid>
      ) 
    } else if (item === "video") {
      return (
        <Grid size={12}>
          <EditVideo />
        </Grid>
      );
    }
  };

  return (
    <div ref={dropRef}>
      <Box
        sx={{
          height: "auto",
          minHeight: "30vh",
          maxHeight: "90vh",
          backgroundColor: "lightgray",
          width: "40vw",
          marginTop: "5%",
          overflow: "auto",
          padding: "5%",
          textAlign: "center"
        }}
      >
        <Typography variant="h6">
          {isOver ? "Drop here" : "Drop your items"}
        </Typography>

        {droppedItems.map((item) => (
          <Grid sx={{margin: "2%"}} container>{renderItem(item)}</Grid>
        ))}
      </Box>
    </div>
  );
};

export default Page;
