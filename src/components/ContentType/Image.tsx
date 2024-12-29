import React from "react";
import { Card, CardContent } from "@mui/material";
import { CiImageOn } from "react-icons/ci";

const Image: React.FC = () => {
  return (
    <Card square sx={{ width: "8vw", height: "10vh" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CiImageOn />
        <p>Image</p>
      </CardContent>
    </Card>
  );
};

export default Image;
