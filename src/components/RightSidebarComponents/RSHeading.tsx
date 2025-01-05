import React, { useEffect, useState } from "react";
import { Typography, TextField, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FontFamilySelector from "./FontFamilySelector";
import FontWeightSelector from "./FontWeightSelector";
import { Heading } from "../../Models/Heading";
import RowsSelector from "./RowsSelector";
import FontSizeSelector from "./FonstSizeSelector";

interface RSHeadingProps{
  item: Heading;
}

const RSHeading: React.FC<RSHeadingProps> = ({item}) => {

  const [heading,setHeading] = useState<Heading>();

  useEffect(()=>{
    setHeading(item);
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
        <TextField
          label="Heading"
          fullWidth
          size="small"
          style={{ width: "100%" }}
        />
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
        <FontFamilySelector font={heading?.properties.fontFamily || "italic"} />
      </Grid>

      <Grid size={12}>
        <FontWeightSelector weight={heading?.properties.fontWeight || "semibold"} />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <FontSizeSelector size={heading?.properties.fontSize ?? 18} />
      </Grid>

      <Grid size={6}>
        <RowsSelector rows={heading?.properties.rowsNumber ?? 1} />
      </Grid>
    </Grid>
  );
};

export default RSHeading;
