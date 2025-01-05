import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface HeightSelectorProps {
  value: number;
  onChangeHeight: (newHeight: number) => void;
}

const HeightSelector: React.FC<HeightSelectorProps> = ({ value, onChangeHeight }) => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setHeight(value);
  }, [value]);

  return (
    <div>
      <TextField
        value={height}
        label="Height"
        fullWidth
        size="small"
        style={{ width: "100%" }}
        type="number"
        onChange={(e)=> {
          const newValue = Number(e.target.value);
          setHeight(newValue);
          onChangeHeight(newValue);
        }}
      />
    </div>
  );
};

export default HeightSelector;
