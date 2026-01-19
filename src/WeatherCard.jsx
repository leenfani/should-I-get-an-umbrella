import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';

export default function WeatherCard() {
  return (
    <div className="grid place-items-center min-h-screen">
      <Container
        fixed
        maxWidth="sm"
        style={{
          backgroundColor: "#049bff",
          borderRadius: "25px",
          boxShadow: "8px 11px 2px rgba(0,0,0,0.09)",
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, direction: "rtl" }}>
          {/* cityName + date */}
          <Grid
            size={12}
            className="flex items-baseline gap-5 border-b-4 pr-5 pt-5"
          >
            <Typography variant="h1"> لندن</Typography>
            <Typography variant="h5"> يناير 2026</Typography>
          </Grid>

          {/* detailes */}
          <Grid container size={6} className="flex items-baseline gap-5">
            <div>
              <div>
                <Typography variant="h1">38</Typography>
                {/* tempreture state image */}
              </div>
              <Typography variant="h6" className="pb-5">
                broken cloues
              </Typography>
              <div className="flex items-baseline gap-2">
                <Typography variant="h6" className="pb-5">
                  18 صغرى |
                </Typography>
                <Typography variant="h6" className="pb-5">22 كبرى</Typography>
              </div>
            </div>
          </Grid>

          {/* icon */}
          <Grid size={6}>
            <CloudIcon style={{fontSize:"200px"}}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
