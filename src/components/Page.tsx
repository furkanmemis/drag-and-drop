import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { useDrop } from "react-dnd";

interface DropTargetProps {
  onDrop: (itemId: string) => void;
}

const Page: React.FC<DropTargetProps> = ({ onDrop }) => {
  const [droppedItems, setDroppedItems] = React.useState<string[]>([]);
  const dropRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item: { id: string }) => {
      onDrop(item.id);
      setDroppedItems((prevItems) => [...prevItems, item.id]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop, dropRef]);

  return (
    <div ref={dropRef}>
      <Box
        sx={{
          height: "50vh",
          maxHeight: "90vh",
          backgroundColor: "lightgray",
          width: "40vw",
          marginTop: "5%",
        }}
      >
        <p>
          {isOver ? "Bırakmak için buraya sürükle" : "Buraya öğe bırakılacak"}
        </p>

        <ul>
          {droppedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Page;
