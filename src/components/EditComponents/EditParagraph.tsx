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

    <div onClick={()=>{onClickParagraph('paragraph')}} style={{minHeight: "10vh"}}>
      <p style={{padding: "3%", fontSize: paragraph?.properties.fontSize+"px", fontWeight: paragraph?.properties.fontWeight, fontFamily: paragraph?.properties.fontFamily, border: "1px solid black"}}>{paragraph?.properties.text}</p>
    </div>
  );
};

export default EditParagraph;
