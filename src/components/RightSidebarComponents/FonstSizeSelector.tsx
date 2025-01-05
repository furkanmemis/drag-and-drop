import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface FontSizeSelectorProps {
  size: number;
  onSizeChange: (newSize: number) => void;
}

const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({ size, onSizeChange }) => {
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
        onChange={(e)=>{
          const newValue = Number(e.target.value);
          setValue(newValue);
          onSizeChange(newValue);
        }}
      />
    </div>
  );
};
export default FontSizeSelector;
