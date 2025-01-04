import React from "react";
import { Box } from "@mui/material";
import RSParagraph from "./RightSidebarComponents/RSParagraph";
import RSHeading from "./RightSidebarComponents/RSHeading";
import RSVideo from "./RightSidebarComponents/RSVideo";
import RSImage from "./RightSidebarComponents/RSImage";

interface RightSidebarProps {
  selectedItem: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ selectedItem }) => {
  const renderItem = () => {
    if (selectedItem === "paragraph") {
      return <RSParagraph />;
    } else if (selectedItem === "heading") {
      return <RSHeading />;
    } else if (selectedItem === "video") {
      return <RSVideo />;
    }else if(selectedItem === "image"){
      return <RSImage />
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
