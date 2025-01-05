import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Video } from "../../Models/Video";
import WidthSelector from "./WidthSelector";
import HeightSelector from "./HeightSelector";
import MediaSource from "./MediaSource";

interface RSVideoProps {
  item: Video;
}

const RSVideo: React.FC<RSVideoProps> = ({ item }) => {
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    setVideo(item);
  }, [item]);

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
        />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <HeightSelector value={video?.properties.height ?? 350} />
      </Grid>

      <Grid size={6}>
        <WidthSelector num={video?.properties.width || 250} />
      </Grid>
    </Grid>
  );
};

export default RSVideo;
