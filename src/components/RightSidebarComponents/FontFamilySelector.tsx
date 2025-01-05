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
      <MenuItem value="arial">Arial</MenuItem>
      <MenuItem value="italic">Italic</MenuItem>
      <MenuItem value="times-new-roman">Times New Roman</MenuItem>
      <MenuItem value="verdana">Verdana</MenuItem>
      <MenuItem value="georgia">Georgia</MenuItem>
    </Select>
  );
};

export default FontFamilySelector;
