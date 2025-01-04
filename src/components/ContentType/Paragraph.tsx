import React, { useRef } from "react";
import { Card, CardContent } from "@mui/material";
import { TfiParagraph } from "react-icons/tfi";
import { useDrag } from "react-dnd";

const Paragraph: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: "paragraph" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const dragRef = useRef(null);
  drag(dragRef);

  return (
    <div ref={dragRef}>
      <Card
        square
        sx={{ width: "8vw", height: "10vh" }}
        style={{
          backgroundColor: isDragging ? "whitesmoke" : "white",
        }}
      >
        <CardContent>
          <TfiParagraph />
          <p>Paragraph</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Paragraph;
