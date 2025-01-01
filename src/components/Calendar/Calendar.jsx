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
} from "@mui/material";

const WEEK_DAYS = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
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

  const today = new Date();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

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
      alert("אנא מלא את כל השדות הדרושים.");
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
      `התור נקבע בהצלחה! פרטי הפגישה נשלחו למייל. \n חשוב לחדש כל 3 שבועות עד חודש לשמירה על בריאות הציפורניים. ${
        additionalInfo.reminder ? "תזכורת תישלח שבועיים לפני החודש." : ""
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
        קביעת תור
      </Typography>
      <FormControl component="fieldset" sx={{ marginBottom: 4 }}>
        <RadioGroup
          row
          value={clientType}
          onChange={(e) => setClientType(e.target.value)}
        >
          <FormControlLabel
            value="new"
            control={<Radio />}
            label="לקוחה חדשה"
          />
          <FormControlLabel
            value="returning"
            control={<Radio />}
            label="לקוחה חוזרת"
          />
        </RadioGroup>
      </FormControl>
      {clientType === "new" && (
        <Box sx={{ marginBottom: 4, width: "20%" }}>
          <TextField
            fullWidth
            label="שם פרטי"
            value={clientDetails.firstName}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, firstName: e.target.value })
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="שם משפחה"
            value={clientDetails.lastName}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, lastName: e.target.value })
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="מספר טלפון"
            value={clientDetails.phone}
            onChange={(e) =>
              setClientDetails({ ...clientDetails, phone: e.target.value })
            }
          />
          <Box sx={{ marginTop: 2, textAlign: "center" , display:"inline-flex",}}>
            <Button
              variant="outlined"
              sx={{
                marginRight: 2,
                color: "#8d6e63",
                borderColor: "#8d6e63",
              }}
            >
              הרשם ושמור נתונים
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#8d6e63",
                borderColor: "#8d6e63",
              }}
            >
              קבע תור ללא הרשמה
            </Button>
          </Box>
        </Box>
      )}
      {clientType === "returning" && (
        <Button
          variant="outlined"
          sx={{
            marginBottom: 4,
            color: "#8d6e63",
            borderColor: "#8d6e63",
          }}
        >
          התחברות
        </Button>
      )}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            currentMonthDays,
            today.toLocaleString("he-IL", { month: "long", year: "numeric" })
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderCalendar(
            nextMonthDays,
            new Date(today.getFullYear(), today.getMonth() + 1).toLocaleString(
              "he-IL",
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
            : תאריך נבחר {selectedDate.toLocaleDateString("he-IL")}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 2, color: "#8d6e63" }}
          >
            : בחר שעה
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
           : הערות נוספות
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Typography
            variant="subtitle1"
            sx={{ color: "#8d6e63", marginBottom: 1 }}
          >
           : פרטים נוספים
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
            label="ציפורניים ארוכות"
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
            label="השלמת ציפורן"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={additionalInfo.reminder}
                onChange={(e) =>
                  setAdditionalInfo({
                    ...additionalInfo,
                    reminder: e.target.checked,
                  })
                }
              />
            }
            label="שלח לי תזכורת שבועיים לפני"
          />
          <Button
            onClick={handleSaveAppointment}
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#8d6e63",
              color: "white",
              "&:hover": {
                backgroundColor: "#755b4e",
              },
            }}
          >
            שלח פגישה
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Calendar;
