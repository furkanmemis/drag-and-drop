import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import EditParagraph from "./EditComponents/EditParagraph";
import EditHeading from "./EditComponents/EditHeading";
import EditImage from "./EditComponents/EditImage";
import EditVideo from "./EditComponents/EditVideo";
import Grid from "@mui/material/Grid2";
import { StyleItem } from "../Models/StyleItem";
import { Paragraph } from "../Models/Paragraph";
import { Heading } from "../Models/Heading";


interface DropTargetProps {
  onDrop: (itemId: string) => void;
  onClickSelectedItem: (itemName: string, selectedIndex: number) => void;
  list: StyleItem[];
  onChangeList: (newList: StyleItem[]) => void;
}

const Page: React.FC<DropTargetProps> = ({
  onDrop,
  onClickSelectedItem,
  list,
  onChangeList,
}) => {
  const [droppedItems, setDroppedItems] = React.useState<string[]>([]);
  const dropRef = useRef(null);
  const [allList, setAllList] = useState<StyleItem[]>([]);


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

  useEffect(()=>{
    setAllList(list);
  },[list])

  const handleSelectedItem = (itemName: string, index: number) => {
    onClickSelectedItem(itemName,index);
  };

  const handleUpdated = (index: number, data: any) => {
    const updatedList = [...allList];
    updatedList[index] = data;
    setAllList(updatedList);
    onChangeList(updatedList);
  }


  const renderItem = (item: string, selectedIndex: number) => {
    if (item === "paragraph") {
      return (
        <Grid size={12}>
          <EditParagraph
            onClickParagraph={(itemName) => {
              handleSelectedItem(itemName,selectedIndex);
            }}
            item={allList[selectedIndex] as Paragraph}
            onParagraphChange={(newParagraph) => {handleUpdated(selectedIndex,newParagraph)}}
          />
        </Grid>
      );
    } else if (item === "heading") {
      return (
        <Grid size={12}>
          <EditHeading
            onClickHeading={(itemName) => {
              handleSelectedItem(itemName,selectedIndex);
            }}
            item={allList[selectedIndex] as Heading}
            onChangeHeading={(newHeading) => {handleUpdated(selectedIndex,newHeading)}}
          />
        </Grid>
      );
    } else if (item === "image") {
      return (
        <Grid size={12}>
          <EditImage
            onClickImage={(itemName) => {
              handleSelectedItem(itemName,selectedIndex);
            }}
          />
        </Grid>
      );
    } else if (item === "video") {
      return (
        <Grid size={12}>
          <EditVideo
            onClickVideo={(itemName) => {
              handleSelectedItem(itemName,selectedIndex);
            }}
          />
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
          maxHeight: "80vh",
          backgroundColor: "whitesmoke",
          width: "40vw",
          marginTop: "5%",
          overflow: "auto",
          padding: "5%",
          textAlign: "center",
          border: "2px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h6">
          {isOver ? "Drop here" : "Drop your items"}
        </Typography>

        <div style={{ opacity: isOver ? 0.3 : 1 }}>
          {droppedItems.map((item,index) => (
            <Grid sx={{ margin: "2%" }} container>
              {renderItem(item,index)}
            </Grid>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Page;
