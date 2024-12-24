import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { CalendarPicker } from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  // תאריכים פנויים (אתה יכול להגדיר כאן את התאריכים הפנויים שלך)
  const availableDates = [
    new Date(2024, 11, 24), // 24 בדצמבר 2024
    new Date(2024, 11, 25), // 25 בדצמבר 2024
    new Date(2024, 11, 26),
    new Date(2025, 0, 2),
  ];

  // פונקציה לבדוק אם תאריך זמין
  const isDateAvailable = (date) => {
    return availableDates.some(
      (availableDate) =>
        date.toDateString() === availableDate.toDateString()
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        backgroundColor: "#fdf8f4",
        borderRadius: 4,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#8d6e63",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        Schedule Your Appointment
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* לוח שנה לחודש הנוכחי */}
        <Grid item xs={12} sm={6} md={5}>
          <Card elevation={3} sx={{ padding: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
            >
              Current Month
            </Typography>
            <CalendarPicker
              date={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              renderDay={(day, _value, DayComponentProps) => {
                const isAvailable = isDateAvailable(day);

                return (
                  <IconButton
                    {...DayComponentProps}
                    sx={{
                      backgroundColor: isAvailable
                        ? "rgba(76, 175, 80, 0.2)"
                        : "rgba(244, 67, 54, 0.2)",
                      borderRadius: 1,
                      padding: "6px",
                    }}
                  >
                    {isAvailable ? (
                      <CheckCircleIcon
                        sx={{ color: "#4caf50", fontSize: "1rem" }}
                      />
                    ) : (
                      <HighlightOffIcon
                        sx={{ color: "#f44336", fontSize: "1rem" }}
                      />
                    )}
                  </IconButton>
                );
              }}
            />
          </Card>
        </Grid>

        {/* לוח שנה לחודש הבא */}
        <Grid item xs={12} sm={6} md={5}>
          <Card elevation={3} sx={{ padding: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
            >
              Next Month
            </Typography>
            <CalendarPicker
              date={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              renderDay={(day, _value, DayComponentProps) => {
                const isAvailable = isDateAvailable(day);

                return (
                  <IconButton
                    {...DayComponentProps}
                    sx={{
                      backgroundColor: isAvailable
                        ? "rgba(76, 175, 80, 0.2)"
                        : "rgba(244, 67, 54, 0.2)",
                      borderRadius: 1,
                      padding: "6px",
                    }}
                  >
                    {isAvailable ? (
                      <CheckCircleIcon
                        sx={{ color: "#4caf50", fontSize: "1rem" }}
                      />
                    ) : (
                      <HighlightOffIcon
                        sx={{ color: "#f44336", fontSize: "1rem" }}
                      />
                    )}
                  </IconButton>
                );
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calendar;
