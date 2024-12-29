import React from "react";
import { Card, CardContent } from "@mui/material";
import { MdOndemandVideo } from "react-icons/md";

const Video: React.FC = () => {
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
        <MdOndemandVideo />
        <p>Video</p>
      </CardContent>
    </Card>
  );
};

export default Video;
