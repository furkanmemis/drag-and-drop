import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface HeightSelectorProps {
  value: number;
}

const HeightSelector: React.FC<HeightSelectorProps> = ({ value }) => {
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
      />
    </div>
  );
};

export default HeightSelector;
