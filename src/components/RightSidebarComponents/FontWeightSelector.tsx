import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";

interface FontWeightSelectorProps {
  weight: string;
  onWeightChange: (newWeight: string) => void;
}

//"bold" | "semibold" | "medium" | "thin"

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ weight, onWeightChange }) => {
  const [selectedWeight, setSelectedWeight] = useState<string>("");

  useEffect(() => {
    setSelectedWeight(weight);
  }, [weight]);
  return (
    <Select
      fullWidth
      value={selectedWeight}
      onChange={(e) => {
        setSelectedWeight(e.target.value);
        onWeightChange(e.target.value);
      }}
      displayEmpty
      size="small"
    >
      <MenuItem value="bold">Bold</MenuItem>
      <MenuItem value="bolder">Bolder</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="thin">Thin</MenuItem>
      <MenuItem value="normal">Normal</MenuItem>
    </Select>
  );
};

export default FontWeightSelector;
