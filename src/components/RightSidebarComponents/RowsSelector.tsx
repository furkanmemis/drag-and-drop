import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface RowsSelectorProps {
  rows: number;
}

const RowsSelector: React.FC<RowsSelectorProps> = ({ rows }) => {
  const [num, setNum] = useState<number>();

  useEffect(() => {
    setNum(rows);
  }, [rows]);

  return (
    <div>
      <TextField
        value={num}
        label="Row Number"
        type="number"
        size="small"
        fullWidth
      />
    </div>
  );
};

export default RowsSelector;
