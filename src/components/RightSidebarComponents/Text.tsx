import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface TextProps {
  label: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ label, content }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(content);
  }, [content]);

  return (
    <div>
      <TextField
        value={text}
        label={label}
        fullWidth
        size="small"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Text;
