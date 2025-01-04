import React from "react";
import { TextField } from "@mui/material";

interface EditHeadingProps {
  onClickHeading: (itemName: string) => void;
}

const EditHeading: React.FC<EditHeadingProps> = ({onClickHeading}) => {
  return <TextField label="Heading" fullWidth size="medium" onClick={()=>{onClickHeading('heading')}} />;
};

export default EditHeading;
