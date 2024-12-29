import React from "react";
import { Box } from "@mui/material";

const RightSidebar: React.FC = () => {
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
        <p style={{textAlign: "center"}}>right sidebar</p>
      </div>
    </Box>
  );
};

export default RightSidebar;
