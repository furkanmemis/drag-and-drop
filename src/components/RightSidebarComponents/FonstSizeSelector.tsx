import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface FontSizeSelectorProps {
  size: number;
}

const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({ size }) => {
  const [value, setValue] = useState<number>();

  useEffect(() => {
    setValue(size);
  }, [size]);

  return (
    <div>
      <TextField
        value={value}
        label="Font Size"
        type="number"
        size="small"
        fullWidth
      />
    </div>
  );
};
export default FontSizeSelector;
