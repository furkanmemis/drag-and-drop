import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface MediaSourceProps {
  label: string;
  source: string;
}

const MediaSource: React.FC<MediaSourceProps> = ({ label, source }) => {
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
      />
    </div>
  );
};

export default MediaSource;
