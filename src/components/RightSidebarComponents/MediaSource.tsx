import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface MediaSourceProps {
  label: string;
  source: string;
  onChangeSource: (newSource: string) => void;
}

const MediaSource: React.FC<MediaSourceProps> = ({ label, source, onChangeSource }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(source);
  }, [source]);

  return (
    <div>
      <TextField
        label={label}
        value={value}
        fullWidth
        size="small"
        style={{ width: "100%" }}
        onChange={(e)=>{
          setValue(e.target.value);
          onChangeSource(e.target.value);
        }}
      />
    </div>
  );
};

export default MediaSource;
