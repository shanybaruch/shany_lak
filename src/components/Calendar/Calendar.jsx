import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";

const WEEK_DAYS = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

const generateCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }
  return days;
};

const Calendar = () => {
  const [appointments, setAppointments] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const today = new Date();

  useEffect(() => {
    // גלילה תמיד למעלה
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

    // אנימציית הופעה
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const currentMonthDays = generateCalendarDays(
    today.getFullYear(),
    today.getMonth()
  );
  const nextMonthDays = generateCalendarDays(
    today.getFullYear(),
    today.getMonth() + 1
  );

  const handleAppointmentToggle = (date) => {
    const dateKey = date.toDateString();
    setAppointments((prev) => ({
      ...prev,
      [dateKey]: !prev[dateKey],
    }));
  };

  const renderCalendar = (days, monthName) => (
    <Card
      elevation={4}
      sx={{
        padding: 2,
        margin: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 3,
          color: "#8d6e63",
        }}
      >
        {monthName}
      </Typography>
      <Grid container spacing={1}>
        {WEEK_DAYS.map((day) => (
          <Grid item xs={12 / 7} key={day} sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2" fontWeight="bold">
              {day}
            </Typography>
          </Grid>
        ))}
        {days.map((date) => (
          <Grid
            item
            xs={12 / 7}
            key={date.toDateString()}
            sx={{ textAlign: "center" }}
          >
            <Button
              onClick={() => handleAppointmentToggle(date)}
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: appointments[date.toDateString()]
                  ? "#4caf50"
                  : "#e0e0e0",
                color: appointments[date.toDateString()] ? "white" : "black",
                "&:hover": {
                  backgroundColor: appointments[date.toDateString()]
                    ? "#388e3c"
                    : "#bdbdbd",
                },
              }}
            >
              {date.getDate()}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 6,
        backgroundColor: "#d7ccc8",
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#8d6e63",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Schedule a meeting
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            currentMonthDays,
            today.toLocaleString("he-IL", { month: "long" })
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            nextMonthDays,
            new Date(
              today.getFullYear(),
              today.getMonth() + 1
            ).toLocaleString("he-IL", { month: "long" })
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;
