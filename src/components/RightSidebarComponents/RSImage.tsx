import React from "react";
import { Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const RSImage: React.FC = () => {
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
        <TextField
          label="Image Source"
          fullWidth
          size="small"
          style={{ width: "100%" }}
        />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <TextField
          label="Height"
          fullWidth
          size="small"
          style={{ width: "100%" }}
        />
      </Grid>

      <Grid size={6}>
        <TextField
          label="Width"
          fullWidth
          size="small"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default RSImage;
