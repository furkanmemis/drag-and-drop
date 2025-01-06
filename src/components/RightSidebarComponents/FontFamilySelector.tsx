import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";

interface FontSelectorProps {
  font: string;
  onFamilyChange: (newFamily: string) => void;
}

const FontFamilySelector: React.FC<FontSelectorProps> = ({ font, onFamilyChange }) => {
  const [selectedFont, setSelectedFont] = useState<string>("");

  useEffect(() => {
    setSelectedFont(font);
  }, [font]);

  return (
    <Select
      fullWidth
      value={selectedFont}
      onChange={(e) => {
        setSelectedFont(e.target.value);
        onFamilyChange(e.target.value);
      }}
      displayEmpty
      size="small"
    >
      <MenuItem value="cursive">Cursive</MenuItem>
      <MenuItem value="fantasy">Fantsy</MenuItem>
      <MenuItem value="inherit">Inherit</MenuItem>
      <MenuItem value="serif">Serif</MenuItem>
      <MenuItem value="monospace">Monospace</MenuItem>
    </Select>
  );
};

export default FontFamilySelector;
