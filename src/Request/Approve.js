import React from 'react';
import Button from '@mui/material/Button';
import './Approve.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#13273F',
    },
    secondary: {
      main: '#F2F2F2',
    },
  },
});

function Approve({ titleButton,active, status }) {
  return (
    <div className="Approve">
      <ThemeProvider theme={theme}>
        {status === 'Pending' && (
          <Button
            color={!active ? 'primary' : 'secondary'}
            variant="contained"
            size="medium"
          >
            {titleButton}
          </Button>
        )}
        <div style={{ paddingTop: '.6rem', textDecoration: "underline" }}>View Details</div>
      </ThemeProvider>
    </div>
  );
}

export default Approve;
