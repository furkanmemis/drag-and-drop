import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import RSParagraph from "./RightSidebarComponents/RSParagraph";
import RSHeading from "./RightSidebarComponents/RSHeading";
import RSVideo from "./RightSidebarComponents/RSVideo";
import RSImage from "./RightSidebarComponents/RSImage";
import { StyleItem } from "../Models/StyleItem";
import { Video } from "../Models/Video";
import { Image } from "../Models/Image";
import { Heading } from "../Models/Heading";
import { Paragraph } from "../Models/Paragraph";

interface RightSidebarProps {
  selectedItem: string;
  index: number;
  list: StyleItem[];
  onListChange: (list: StyleItem[]) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ selectedItem, index, list, onListChange }) => {

  const [item,setItem] = useState<Video | Paragraph | Image | Heading | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>();
  const [allList, setAllList] = useState<StyleItem[]>([]);

  useEffect(()=>{
    setItem(list[index]);
    setSelectedItemIndex(index);
    setAllList(list);
  },[index, list])

  const handleUpdated = (index: number, data: any) => {
    const updatedList = [...allList];
    updatedList[index] = data;
    setAllList(updatedList); 
    onListChange(updatedList);
  };

  const renderItem = () => {
    if (selectedItem === "paragraph") {
      return <RSParagraph item={item as Paragraph} index={selectedItemIndex ?? -1} onChangeParagraph={(newParagraph, index) => {handleUpdated(index,newParagraph)}} />;
    } else if (selectedItem === "heading") {
      return <RSHeading item={item as Heading} index={selectedItemIndex ?? -1} onChangeHeading={(newHeading, index) => {handleUpdated(index,newHeading)}} />;
    } else if (selectedItem === "video") {
      return <RSVideo item={item as Video} index={selectedItemIndex ?? -1} onChangeVideo={(newVideo,index) => {handleUpdated(index,newVideo)}} />;
    }else if(selectedItem === "image"){
      return <RSImage item={item as Image} index={selectedItemIndex ?? -1} onChangeImage={(newImage, index) => {handleUpdated(index,newImage)}} />
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#F2FAFF",
        minWidth: "20vw",
        borderRight: "2px solid rgba(0, 0, 0, 0.2)",
        height: "100vh",
      }}
    >
      <div>
        {renderItem()}
      </div>
    </Box>
  );
};

export default RightSidebar;
