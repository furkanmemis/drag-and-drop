import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaHeading } from "react-icons/fa6";

const Heading: React.FC = () => {
  return (
    <Card square sx={{ width: "8vw", height: "10vh" }}>
      <CardContent>
        <FaHeading />
        <p>Heading</p>
      </CardContent>
    </Card>
  );
};

export default Heading;
