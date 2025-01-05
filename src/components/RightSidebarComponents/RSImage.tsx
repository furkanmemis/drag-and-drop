import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Image } from "../../Models/Image";
import WidthSelector from "./WidthSelector";
import HeightSelector from "./HeightSelector";
import MediaSource from "./MediaSource";

interface RSImageProps {
  item: Image;
}

const RSImage: React.FC<RSImageProps> = ({ item }) => {
  const [image, setImage] = useState<Image>();

  useEffect(() => {
    setImage(item);
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
          label="Image Source"
          source={image?.properties.src || ""}
        />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <HeightSelector value={image?.properties.height ?? 250} />
      </Grid>

      <Grid size={6}>
        <WidthSelector num={image?.properties.width ?? 350} />
      </Grid>
    </Grid>
  );
};

export default RSImage;
