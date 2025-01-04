import React from "react";
import { TextField } from "@mui/material";

interface EditParagraphProps{
    onClickParagraph: (itemName: string) => void;
}
const EditParagraph: React.FC<EditParagraphProps> = ({onClickParagraph}) =>{
    return(

        <TextField
            label="Paragraph"
            fullWidth
            size="medium"
            rows={3}
            multiline
            onClick={()=>{onClickParagraph('paragraph')}}
        />

    )
}

export default EditParagraph;