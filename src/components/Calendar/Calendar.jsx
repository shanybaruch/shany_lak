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
  Radio,
  RadioGroup,
  FormControl,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import FormSignIn from "../Formsignin/Formsignin";
import FormSignUp from "../Formsignup/Formsignup";

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
  const [appointments, setAppointments] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [notes, setNotes] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState({
    longNails: false,
    nailFixNeeded: false,
    reminder: false,
  });
  const [clientType, setClientType] = useState("");
  const [clientDetails, setClientDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [warning, setWarning] = useState(false); // For the warning message

  const today = new Date();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update warning message if needed
    setWarning(additionalInfo.longNails || additionalInfo.nailFixNeeded);
  }, [additionalInfo]);

  const currentMonthDays = generateCalendarDays(
    today.getFullYear(),
    today.getMonth()
  );
  const nextMonthDays = generateCalendarDays(
    today.getFullYear(),
    today.getMonth() + 1
  );

  const handleDateClick = (date) => {
    if (!date || date.getDay() === 5 || date.getDay() === 6) return;
    setSelectedDate(date);
    setSelectedHour("");
    setNotes("");
    setAdditionalInfo({
      longNails: false,
      nailFixNeeded: false,
      reminder: false,
    });
  };

  const handleSaveAppointment = () => {
    if (
      !selectedHour ||
      !clientDetails.firstName ||
      !clientDetails.lastName ||
      !clientDetails.phone
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const appointmentDetails = {
      date: selectedDate.toDateString(),
      hour: selectedHour,
      notes,
      additionalInfo,
      clientDetails,
    };

    console.log("Appointment saved:", appointmentDetails);
    alert(
      `Appointment successfully scheduled! Details have been sent via email. \n Please renew every 3 weeks to a month for nail health. ${
        additionalInfo.reminder
          ? "A reminder will be sent two weeks before the month."
          : ""
      }`
    );
    setSelectedDate(null);
  };

  const renderCalendar = (days, monthName) => (
    <Card
      elevation={4}
      sx={{
        padding: 2,
        margin: 2,
        backgroundColor: "#ffffff",
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
        {days.map((date, index) => (
          <Grid item xs={12 / 7} key={index} sx={{ textAlign: "center" }}>
            <Button
              onClick={() => handleDateClick(date)}
              disabled={date && (date.getDay() === 5 || date.getDay() === 6)}
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: !date
                  ? "transparent"
                  : date.getDay() === 5 || date.getDay() === 6
                  ? "#e0e0e0"
                  : "#ffffff",
                color:
                  date && date.getDay() !== 5 && date.getDay() !== 6
                    ? "black"
                    : "#9e9e9e",
                "&:hover": {
                  backgroundColor:
                    date && date.getDay() !== 5 && date.getDay() !== 6
                      ? "#d7ccc8"
                      : "#e0e0e0",
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 6,
        backgroundColor: "#f7ebe8",
        minHeight: "100vh",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#8d6e63",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Schedule Appointment
      </Typography>
      <FormControl component="fieldset" sx={{ marginBottom: 4 }}>
        <RadioGroup
          row
          value={clientType}
          onChange={(e) => {
            setClientType(e.target.value);
            setOpenDialog(true);
          }}
        >
          <FormControlLabel
            value="new"
            control={<Radio />}
            label="New Client"
          />
          <FormControlLabel
            value="returning"
            control={<Radio />}
            label="Returning Client"
          />
        </RadioGroup>
      </FormControl>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            maxHeight: "90vh",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          {clientType === "new" ? "New Client Registration" : "  "}
        </DialogTitle>
        <DialogContent sx={{ overflowY: "auto" }}>
          {clientType === "new" ? (
            <FormSignUp open={openDialog} onClose={() => setOpenDialog(false)} />
          ) : (
            <FormSignIn onClose={() => setOpenDialog(false)} />
          )}
        </DialogContent>
       
      </Dialog>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            currentMonthDays,
            today.toLocaleString("en-US", { month: "long", year: "numeric" })
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            nextMonthDays,
            new Date(today.getFullYear(), today.getMonth() + 1).toLocaleString(
              "en-US",
              { month: "long", year: "numeric" }
            )
          )}
        </Grid>
      </Grid>
      {selectedDate && (
        <Box
          sx={{
            marginTop: 4,
            padding: 3,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#8d6e63" }}>
            Selected Date: {selectedDate.toLocaleDateString("en-US")}
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
          <Typography
            variant="subtitle1"
            sx={{ color: "#8d6e63", marginBottom: 1 }}
          >
            Additional Details:
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={additionalInfo.longNails}
                onChange={(e) =>
                  setAdditionalInfo({
                    ...additionalInfo,
                    longNails: e.target.checked,
                  })
                }
              />
            }
            label="Long Nails"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={additionalInfo.nailFixNeeded}
                onChange={(e) =>
                  setAdditionalInfo({
                    ...additionalInfo,
                    nailFixNeeded: e.target.checked,
                  })
                }
              />
            }
            label="Nail Fix Needed"
          />
          {warning && (
            <Typography
              variant="body2"
              sx={{
                color: "#d32f2f",
                marginTop: 1,
                fontStyle: "italic",
              }}
            >
              * Please note that the treatment may take longer than usual due to nail condition.
            </Typography>
          )}
          <Box sx={{ marginTop: 2 }}>
            <Button
              onClick={handleSaveAppointment}
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
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Calendar;
