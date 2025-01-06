import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Video } from "../../Models/Video";
import WidthSelector from "./WidthSelector";
import HeightSelector from "./HeightSelector";
import MediaSource from "./MediaSource";

interface RSVideoProps {
  item: Video;
  index: number;
  onChangeVideo: (newVideo: Video, index: number) => void;
}

const RSVideo: React.FC<RSVideoProps> = ({ item, index, onChangeVideo }) => {
  const [video, setVideo] = useState<Video>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    setVideo(item);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [item, index]);

  const handleVideoChange = (
    field: keyof Video["properties"],
    newValue: any
  ) => {
    const updatedVideo = {
      ...video,
      properties: {
        ...video?.properties,
        [field]: newValue,
      },
    };
    setVideo(updatedVideo as Video);
    onChangeVideo(updatedVideo as Video, selectedIndex ?? -1);
  };

  return (
    <Grid
      container
      sx={{ padding: "5%", justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Source
        </Typography>
      </Grid>

      <Grid size={12}>
        <MediaSource
          label="Media Source"
          source={video?.properties.src || ""}
          onChangeSource={(newSource) => {
            handleVideoChange("src", newSource);
          }}
          helper="Copy Youtube video url"
        />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <HeightSelector
          value={video?.properties.height ?? 350}
          onChangeHeight={(newHeight) => {
            handleVideoChange("height", newHeight);
          }}
        />
      </Grid>

      <Grid size={6}>
        <WidthSelector
          num={video?.properties.width || 250}
          onChangeWidth={(newWidth) => {
            handleVideoChange("width", newWidth);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default RSVideo;
