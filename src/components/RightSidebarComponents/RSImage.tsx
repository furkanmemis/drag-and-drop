import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Image } from "../../Models/Image";
import WidthSelector from "./WidthSelector";
import HeightSelector from "./HeightSelector";
import MediaSource from "./MediaSource";

interface RSImageProps {
  item: Image;
  index: number;
  onChangeImage: (newImage: Image, index: number) => void;
}

const RSImage: React.FC<RSImageProps> = ({ item, index, onChangeImage }) => {
  const [image, setImage] = useState<Image>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    setImage(item);
    if(index !== -1){
      setSelectedIndex(index);
    }
  }, [item, index]);

  const handleImageChange = (
    field: keyof Image["properties"],
    newValue: any
  ) => {
    const updatedImage = {
      ...image,
      properties: {
        ...image?.properties,
        [field]: newValue,
      },
    };
    setImage(updatedImage as Image);
    onChangeImage(updatedImage as Image, selectedIndex ?? -1);
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
          label="Image Source"
          source={image?.properties.src || ""}
          onChangeSource={(newSource) => {
            handleImageChange("src", newSource);
          }}
          helper="Copy image url"
        />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <HeightSelector
          value={image?.properties.height ?? 250}
          onChangeHeight={(newHeight) => {
            handleImageChange("height", newHeight);
          }}
        />
      </Grid>

      <Grid size={6}>
        <WidthSelector
          num={image?.properties.width ?? 350}
          onChangeWidth={(newWidth) => {
            handleImageChange("width", newWidth);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default RSImage;
