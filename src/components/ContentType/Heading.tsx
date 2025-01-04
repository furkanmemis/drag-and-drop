import React, { useRef } from "react";
import { Card, CardContent } from "@mui/material";
import { FaHeading } from "react-icons/fa6";
import { useDrag } from "react-dnd";
const Heading: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: "heading" },
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
          <FaHeading />
          <p>Heading</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Heading;
