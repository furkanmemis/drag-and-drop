import React from "react";
import { Card, CardContent } from "@mui/material";
import { TfiParagraph } from "react-icons/tfi";

const Paragraph: React.FC = () => {
  return (
    <Card square sx={{ width: "8vw", height: "10vh" }}>
      <CardContent>
        <TfiParagraph />
        <p>Paragraph</p>
      </CardContent>
    </Card>
  );
};

export default Paragraph;
