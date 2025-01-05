import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface TextProps {
  label: string;
  content: string;
  onText: (newText: string) => void;
}

const Text: React.FC<TextProps> = ({ label, content, onText }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(content);
  }, [content]);


  const handleChange = (value: string) => {
    setText(value);
    onText(value);
  };

  return (
    <div>
      <TextField
        value={text}
        label={label}
        fullWidth
        size="small"
        style={{ width: "100%" }}
        onChange={(e) => {handleChange(e.target.value)}}
      />
    </div>
  );
};

export default Text;
