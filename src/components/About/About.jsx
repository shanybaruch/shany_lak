import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // עיכוב קצר לאפקט ציפה

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="About">
      <Box
        sx={{
          backgroundImage: `url('/lakbattleback.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* שכבת רקע שקופה */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1,
          }}
        ></Box>

        {/* תוכן מעל הרקע השקוף */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "#efebe9",
            padding: "50px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(255, 255, 255, 0.3)",
            width: "100%",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s ease-in-out",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            About us
          </Typography>
          <Typography>
            , היי אהובות <br />
            . תוכלו אצלנו להתפנק בטיפול כיפי לציפורניים <br />
            . לק ג'ל ותיקון מבנה אנטומי כמובן! מניקור יסודי משולב, ידני ומכשירי
            <br />
            .. הדבר החשוב לנו ביותר הוא בריאות הציפורניים שלך! ולכן במקרה ועל
            הציפורן חשד לפטרייה, אוניכוליזיס ועוד <br />
            . לא נבצע טיפול רגיל ומלא של לק ג'ל, נשלח אותך עם הנחיות מפורטות איך
            להמשיך טיפול בבית, ובמקרים מסויימים גם ביקור אצל הרופא <br />
            . כמובן שגם אם את אלרגית את יכולה להתפנק אצלנו כי רוב החומרים שלנו
            עדינים במיוחד וגם מיועדים לאלרגיות <br />
            . גם אם הציפורניים שלך חלשות וקשה ללק ג'ל להתפס עליהן ולהחזיק לשלושה
            שבועות, גם לכן אנחנו נדאג למצוא את החומר שמתאים לכן <br />
            . גם אם נשברה לך ציפורן כמובן שנשלים אותה <br />. ולמי מכן שאוהבות
            ציפורניים ארוכות, תהיו בטוחות שאנחנו נדאג לכן <br />
            , מוציאות קבלות בשבילכן <br />
            ! ואווירה נעימה מובטחת <br />
            (: מחכות לכן ואוהבות
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default About;
