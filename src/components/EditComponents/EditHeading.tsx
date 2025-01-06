import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Heading } from "../../Models/Heading";

interface EditHeadingProps {
  onClickHeading: (itemName: string) => void;
  item: Heading;
  onChangeHeading: (newHeading: Heading) => void;
}

const EditHeading: React.FC<EditHeadingProps> = ({
  onClickHeading,
  item,
  onChangeHeading,
}) => {
  const [heading, setHeading] = useState<Heading>();

  useEffect(() => {
    setHeading(item);
  }, [item]);

  const handleTextChange = (newHeading: string) => {
    let updatedParagraph = {
      ...heading,
      properties: {
        ...heading?.properties,
        text: newHeading,
      },
    };
    setHeading(updatedParagraph as Heading);
    onChangeHeading(updatedParagraph as Heading);
  };

  return (
    <TextField
      value={heading?.properties.text}
      label="Heading"
      fullWidth
      size="medium"
      onClick={() => {
        onClickHeading("heading");
      }}
      rows={heading?.properties.rowsNumber}
      onChange={(e) => {
        handleTextChange(e.target.value);
      }}
      multiline
      sx={{
        '& .MuiInputBase-root':{
          fontFamily: heading?.properties.fontFamily,
          fontSize: heading?.properties.fontSize,
          fontWeight: heading?.properties.fontWeight
        }
      }}
    />
  );
};

export default EditHeading;
