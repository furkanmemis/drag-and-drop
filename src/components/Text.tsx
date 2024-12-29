import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paragraph from "./ContentType/Paragraph";
import Heading from "./ContentType/Heading";



const Text: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F2FAFF",
        minWidth: "20vw",
        height: "auto",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "center",
        marginTop: 5,
      }}
    >
      <Grid container sx={{ alignItems: "flex-start", width: "100%" }}>
        <Grid size={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography
            style={{
              fontWeight: "bold",
              color: "#003366",
            }}
            sx={{ marginLeft: 3 }}
            variant="h6"
          >
            Typography
          </Typography>
        </Grid>
        <Grid size={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {open ? (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ArrowDropDownIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ArrowLeftIcon />
            </IconButton>
          )}
        </Grid>
        <Grid container>
          {open ? (
            <Grid sx={{ display: "flex", marginLeft: 3 }} spacing={3}>
              <Grid size={6} sx={{marginRight: 1}}>
                <Heading />
              </Grid>
              <Grid size={6}>
                <Paragraph />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Text;
