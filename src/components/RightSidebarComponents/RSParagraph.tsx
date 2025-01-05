import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FontFamilySelector from "./FontFamilySelector";
import FontWeightSelector from "./FontWeightSelector";
import { Paragraph } from "../../Models/Paragraph";
import RowsSelector from "./RowsSelector";
import FontSizeSelector from "./FonstSizeSelector";
import Text from "./Text";

interface RSParagrapProps{
  item: Paragraph;
}

const RSParagraph: React.FC<RSParagrapProps> = ({item}) => {
  const [paragraph,setParagraph] = useState<Paragraph>();

  useEffect(()=>{
    setParagraph(item);
  },[item])

  return (
    <Grid
      container
      sx={{ padding: "5%", justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Text
        </Typography>
      </Grid>

      <Grid size={12}>
        <Text label="Paragraph" content={paragraph?.properties.text || ""} />
      </Grid>

      <Grid size={12}>
        <Divider />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Font
        </Typography>
      </Grid>

      <Grid size={12}>
        <FontFamilySelector font={paragraph?.properties.fontFamily || "arial"} />
      </Grid>

      <Grid size={12}>
        <FontWeightSelector weight={paragraph?.properties.fontWeight || "bold"}/>
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <FontSizeSelector size={paragraph?.properties.fontSize ?? 14} />
      </Grid>

      <Grid size={6}>
        <RowsSelector rows={paragraph?.properties.rowsNumber ?? 2} />
      </Grid>
    </Grid>
  );
};

export default RSParagraph;
