import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";

interface FontWeightSelectorProps {
  weight: string;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ weight }) => {
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
      }}
      displayEmpty
      size="small"
    >
      <MenuItem value="Normal">Normal</MenuItem>
      <MenuItem value="Bold">Bold</MenuItem>
      <MenuItem value="Bolder">Bolder</MenuItem>
      <MenuItem value="Lighter">Lighter</MenuItem>
    </Select>
  );
};

export default FontWeightSelector;
