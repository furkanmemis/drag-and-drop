import React from "react";
import { TextField } from "@mui/material";


const EditParagraph: React.FC = () =>{
    return(

        <TextField
            label="Paragraph"
            fullWidth
            size="medium"
            rows={3}
            multiline
        />

    )
}

export default EditParagraph;