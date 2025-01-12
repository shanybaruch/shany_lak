import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const AVAILABLE_HOURS = ["09:00", "11:00", "13:00", "15:00", "17:00"];

const generateCalendarDays = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = [];
  const firstWeekDay = firstDayOfMonth.getDay();

  for (let i = 0; i < firstWeekDay; i++) {
    daysInMonth.push(null);
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysInMonth.push(new Date(year, month, i));
  }

  return daysInMonth;
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [notes, setNotes] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);

  const handleNextMonth = () => {
    if (
      currentMonth.getFullYear() === nextMonth.getFullYear() &&
      currentMonth.getMonth() === nextMonth.getMonth()
    ) {
      return; // חוסם מעבר לחודש שאחרי החודש הבא
    }
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handlePreviousMonth = () => {
    if (
      currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() === today.getMonth()
    ) {
      return; // חוסם מעבר לחודש לפני החודש הנוכחי
    }
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleDateClick = (date) => {
    if (!date || date < today || date.getDay() === 5 || date.getDay() === 6)
      return; // חוסם שישי ושבת
    setSelectedDate(date);
    setSelectedHour("");
    setNotes("");
    setOpenDialog(true);
  };

  const renderCalendar = (days, monthName) => (
    <Card
      elevation={4}
      sx={{
        padding: 2,
        margin: "20px auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        maxWidth: "600px",
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
        {days.map((date, index) => (
          <Grid item xs={12 / 7} key={index} sx={{ textAlign: "center" }}>
            <Button
              onClick={() => handleDateClick(date)}
              disabled={
                date && (date < today || date.getDay() === 5 || date.getDay() === 6)
              }
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: !date
                  ? "transparent"
                  : date.getTime() === today.setHours(0, 0, 0, 0)
                  ? "#a1887f"
                  : date < today || date.getDay() === 5 || date.getDay() === 6
                  ? "#f0f0f0"
                  : "#ffffff",
                color:
                  date && date.getTime() === today.setHours(0, 0, 0, 0)
                    ? "white"
                    : date && (date < today || date.getDay() === 5 || date.getDay() === 6)
                    ? "#9e9e9e"
                    : "black",
                "&:hover": {
                  backgroundColor:
                    date && date >= today && date.getDay() !== 5 && date.getDay() !== 6
                      ? "#d7ccc8"
                      : "#f0f0f0",
                },
              }}
            >
              {date ? date.getDate() : ""}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  );

  const daysInCurrentMonth = generateCalendarDays(
    currentMonth.getFullYear(),
    currentMonth.getMonth()
  );

  return (
    <Box
      sx={{
        padding: 6,
        backgroundImage: `url('/alim.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          zIndex: 0, // הרקע נשאר בשכבה התחתונה
        }}
      />

      <Box
        sx={{
          zIndex: 1, // כל האלמנטים בשכבה עליונה יותר
          position: "relative",
          width: "100%",
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
          Schedule Appointment
        </Typography>

        {renderCalendar(
          daysInCurrentMonth,
          currentMonth.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <IconButton
            onClick={handlePreviousMonth}
            disabled={
              currentMonth.getFullYear() === today.getFullYear() &&
              currentMonth.getMonth() === today.getMonth()
            }
          >
            <ArrowBackIosIcon
              sx={{
                color:
                  currentMonth.getFullYear() === today.getFullYear() &&
                  currentMonth.getMonth() === today.getMonth()
                    ? "#e0e0e0"
                    : "#8d6e63",
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleNextMonth}
            disabled={
              currentMonth.getFullYear() === nextMonth.getFullYear() &&
              currentMonth.getMonth() === nextMonth.getMonth()
            }
          >
            <ArrowForwardIosIcon
              sx={{
                color:
                  currentMonth.getFullYear() === nextMonth.getFullYear() &&
                  currentMonth.getMonth() === nextMonth.getMonth()
                    ? "#e0e0e0"
                    : "#8d6e63",
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          Appointment Details
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ color: "#8d6e63" }}>
            Selected Date: {selectedDate?.toLocaleDateString("en-US")}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 2, color: "#8d6e63" }}
          >
            Select Time:
          </Typography>
          <Grid container spacing={1}>
            {AVAILABLE_HOURS.map((hour) => (
              <Grid item xs={6} key={hour}>
                <Button
                  onClick={() => setSelectedHour(hour)}
                  variant={selectedHour === hour ? "contained" : "outlined"}
                  sx={{
                    width: "100%",
                    color: selectedHour === hour ? "white" : "#8d6e63",
                    backgroundColor:
                      selectedHour === hour ? "#8d6e63" : "transparent",
                    borderColor: "#8d6e63",
                  }}
                >
                  {hour}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 2, color: "#8d6e63" }}
          >
            Additional Notes:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={1}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
              alert("Appointment Saved!");
            }}
            variant="contained"
            sx={{
              backgroundColor: "#8d6e63",
              color: "white",
              "&:hover": {
                backgroundColor: "#755b4e",
              },
            }}
          >
            Save Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
