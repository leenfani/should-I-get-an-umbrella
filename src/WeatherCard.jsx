// REACT

import { useEffect } from "react";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { Button } from "@mui/material";

// EXTERNAL
import axios from "axios";



export default function WeatherCard() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Container
          fixed
          maxWidth="sm"
          sx={{
            backgroundColor: "#049bff",
            borderRadius: "25px",
            boxShadow: "8px 11px 2px rgba(0,0,0,0.09)",
          }}
        >
          <Grid container spacing={2} sx={{ direction: "rtl" }}>
            {/* cityName + date */}
            <Grid
              size={12}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                borderBottom: 4,
                pr: 2,
                pt: 2,
              }}
            >
              <Typography variant="h1">لندن</Typography>
              <Typography sx={{ mb: "7px" }} variant="h5">
                يناير 2026
              </Typography>
            </Grid>

            {/* weather details */}
            <Grid size={6}>
              <Typography variant="h1">38</Typography>
              <Typography variant="h6">broken clouds</Typography>

              <Box display="flex" gap={1}>
                <Typography variant="h6">18 صغرى |</Typography>
                <Typography variant="h6">22 كبرى</Typography>
              </Box>
            </Grid>

            {/* cloud icon */}
            <Grid size={6} display="flex" justifyContent="center">
              <CloudIcon sx={{ fontSize: 200 }} />
            </Grid>
          </Grid>
        </Container>

        <Button variant="text" sx={{ mt: 1 }}>
          language
        </Button>
      </Box>
    </Box>
  );
}
