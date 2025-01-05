import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface WidthSelectorProps {
  num: number;
  onChangeWidth: (newWidth: number) => void;
}

const WidthSelector: React.FC<WidthSelectorProps> = ({ num, onChangeWidth }) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(num);
  }, [num]);

  return (
    <div>
      <TextField
        value={width}
        label="Width"
        fullWidth
        size="small"
        style={{ width: "100%" }}
        type="number"
        onChange={(e)=>{
          const newWidth = Number(e.target.value);
          setWidth(newWidth);
          onChangeWidth(newWidth);
        }}
      />
    </div>
  );
};

export default WidthSelector;
