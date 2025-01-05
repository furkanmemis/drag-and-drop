import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Paragraph } from "../../Models/Paragraph";

interface EditParagraphProps {
  onClickParagraph: (itemName: string) => void;
  item: Paragraph;
  onParagraphChange: (newParagraph: Paragraph) => void;
}
const EditParagraph: React.FC<EditParagraphProps> = ({
  onClickParagraph,
  item,
  onParagraphChange,
}) => {
  const [paragraph, setParagraph] = useState<Paragraph>();

  useEffect(() => {
    setParagraph(item);
  }, [item]);

  const handleTextChange = (newParagraph: string) => {
    let updatedParagraph = {
        ...paragraph,
        properties:{
            ...paragraph?.properties,
            text: newParagraph
        }
    }
    setParagraph(updatedParagraph as Paragraph);
    onParagraphChange(updatedParagraph as Paragraph);
  }

  return (
    <TextField
      value={paragraph?.properties.text}
      label="Paragraph"
      fullWidth
      size="medium"
      rows={paragraph?.properties.rowsNumber}
      multiline
      onClick={() => {
        onClickParagraph("paragraph");
      }}
      onChange={(e)=>{
        handleTextChange(e.target.value);
      }}
    />
  );
};

export default EditParagraph;
