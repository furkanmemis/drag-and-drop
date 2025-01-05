import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface WidthSelectorProps {
  num: number;
}

const WidthSelector: React.FC<WidthSelectorProps> = ({ num }) => {
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
      />
    </div>
  );
};

export default WidthSelector;
