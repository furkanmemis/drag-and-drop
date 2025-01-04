import React from "react";
import { Typography, TextField, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FontFamilySelector from "./FontFamilySelector";
import FontWeightSelector from "./FontWeightSelector";

const RSHeading: React.FC = () => {
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
        <FontFamilySelector font="Arial" />
      </Grid>

      <Grid size={12}>
        <FontWeightSelector weight="Bold" />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <TextField label="Font Size" type="number" size="small" fullWidth />
      </Grid>

      <Grid size={6}>
        <TextField label="Row Number" type="number" size="small" fullWidth />
      </Grid>
    </Grid>
  );
};

export default RSHeading;
