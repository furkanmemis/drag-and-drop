import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface RowsSelectorProps {
  rows: number;
  onRowsChange: (newRow: number) => void;
}

const RowsSelector: React.FC<RowsSelectorProps> = ({ rows, onRowsChange }) => {
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
        onChange={(e)=>{
          const value = Number(e.target.value);
          setNum(value);
          onRowsChange(value);
        }}
      />
    </div>
  );
};

export default RowsSelector;
