import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography, Box, IconButton, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CiImageOn } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";

const Media: React.FC = () => {
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
        MediaAlign: "center",
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
            Media
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
              <Grid size={6} sx={{ marginRight: 1 }}>
                <Card square sx={{ width: "8vw", height: "10vh" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <CiImageOn />
                    <p>Image</p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card square sx={{ width: "8vw", height: "10vh" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <MdOndemandVideo />
                    <p>Video</p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Media;
