import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomButton({title}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#13273f",
      },
    },
  });
  const [active,setActive]=useState(false);
  return (
    <div onMouseEnter={() => {
      setActive(true);
    }} onMouseLeave={() => {
      setActive(false);
    }}>
      <ThemeProvider theme={theme}>
        <Button
          color={!active ? "primary" : "secondary"}
          variant="contained"
          size="large"
          sx={{
            width: 100,
          }}
        >
          <p style={{ fontSize: 9 }}>{title}</p>
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default CustomButton;
