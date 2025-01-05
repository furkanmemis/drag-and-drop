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
}

const RightSidebar: React.FC<RightSidebarProps> = ({ selectedItem, index, list }) => {

  const [item,setItem] = useState<Video | Paragraph | Image | Heading | null>(null);

  useEffect(()=>{
    setItem(list[index]);
  },[index, list])

  const renderItem = () => {
    if (selectedItem === "paragraph") {
      return <RSParagraph item={item as Paragraph} />;
    } else if (selectedItem === "heading") {
      return <RSHeading item={item as Heading} />;
    } else if (selectedItem === "video") {
      return <RSVideo item={item as Video} />;
    }else if(selectedItem === "image"){
      return <RSImage item={item as Image} />
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
