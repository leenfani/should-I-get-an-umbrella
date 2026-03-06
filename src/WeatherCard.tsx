// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// EXTERNAL
import { useDate } from "./customHooks/useDate";
import { useLanguage } from "./customHooks/useLanguage";
import { WeatherMessage, WeatherState } from "./types/weather";

interface WeatherPrps {
  temp: WeatherState;
  weatherMessage: WeatherMessage | null;
}

export default function WeatherCard({ temp, weatherMessage }: WeatherPrps) {
  const { t, toggleLanguage, isAr } = useLanguage();
  const { dayName, monthYear } = useDate(isAr ? "ar" : "en");
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
          <Grid container spacing={2} sx={{ direction: isAr ? "rtl" : "ltr" }}>
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
              <Typography variant="h1">{t("city.london")}</Typography>
              <Box sx={{ mb: "7px" }}>
                <Typography variant="h5">{dayName}</Typography>
                <Typography variant="h5">{monthYear}</Typography>
              </Box>
            </Grid>

            {/* degree + its icon  */}
            <Grid size={6}>
              <Grid sx={{ display: "flex" }}>
                <Typography variant="h1">
                  {temp.current !== null ? `${temp.current}°` : "..."}
                </Typography>
                <Typography variant="h4">
                  <img src={temp.responseicon ?? ""} />
                </Typography>
              </Grid>

              {/* weather details */}
              <Typography variant="h6">
                {temp.description !== "" ? temp.description : "..."}
              </Typography>

              <Box display="flex" gap={1}>
                <Typography variant="h6">
                  {temp.min !== null ? `${temp.min}°` : "..."}
                  {t("weather.min")} |
                </Typography>
                <Typography variant="h6">
                  {temp.max !== null ? `${temp.max}°` : "..."}
                  {t("weather.max")}
                </Typography>
              </Box>
            </Grid>

            {/* cloud icon */}
            <Grid size={6} display="flex" justifyContent="center">
              <CloudIcon sx={{ fontSize: 200 }} />
            </Grid>
          </Grid>
          {/* weather massage */}
          {weatherMessage && (
            <Grid size={12} sx={{ mt: 1, pb: 1 }}>
              <Alert
                icon={false}
                severity={weatherMessage.type || "info"}
                variant="filled"
                sx={{
                  borderRadius: "15px",
                  fontSize: "1.1rem",
                  direction: isAr ? "rtl" : "ltr",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& .MuiAlert-message": {
                    textAlign: "center",
                    width: "100%",
                  },
                }}
              >
                <AlertTitle sx={{ fontWeight: "bold" }}>
                  {weatherMessage.title}
                </AlertTitle>
                {weatherMessage.msg}
              </Alert>
            </Grid>
          )}
        </Container>

        <Button variant="text" sx={{ mt: 1 }} onClick={toggleLanguage}>
          {t("button.toggleLang")}
        </Button>
      </Box>
    </Box>
  );
}
