import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";

interface FontSelectorProps {
  font: string;
}

const FontFamilySelector: React.FC<FontSelectorProps> = ({ font }) => {
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
      }}
      displayEmpty
      size="small"
    >
      <MenuItem value="Arial">Arial</MenuItem>
      <MenuItem value="Italic">Italic</MenuItem>
      <MenuItem value="Times New Roman">Times New Roman</MenuItem>
      <MenuItem value="Verdana">Verdana</MenuItem>
      <MenuItem value="Georgia">Georgia</MenuItem>
    </Select>
  );
};

export default FontFamilySelector;
