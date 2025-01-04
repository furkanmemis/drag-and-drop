import React, { useRef } from "react";
import { Card, CardContent } from "@mui/material";
import { CiImageOn } from "react-icons/ci";
import { useDrag } from "react-dnd";

const Image: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: {id: "image"},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const dragRef = useRef(null);
  drag(dragRef);

  return (
    <div ref={dragRef}>
      <Card square sx={{ width: "8vw", height: "10vh" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          style={{
            backgroundColor: isDragging ? "whitesmoke" : "white"
          }}
        >
          <CiImageOn />
          <p>Image</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Image;
