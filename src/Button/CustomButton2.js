import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomButton({title}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#13273f",
      },
      secondary: {
        main: "#e0e3ea",
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
          color="primary"
          variant="contained"
          size="large"
          sx={{
            width: 120,
            marginLeft:1,
            marginRight:1
          }}
        >
          <p style={{ fontSize: 10 }}>{title}</p>
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default CustomButton;
