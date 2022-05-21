import { createTheme, responsiveFontSizes } from "@mui/material/styles"

// Create a theme instance.
export let theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: '"Rubik", sans-serif',
      h1: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700
      },
      h2: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700
      },
      h3: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700
      },
      h4: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700
      }
    },
    palette: {
      primary: {
        main: "#E56C38"
      },
      secondary: {
        main: "#2F80ED"
      },
      background: {
        default: "#fff"
      }
    }
  })
)

theme = responsiveFontSizes(theme, {
  factor: 1.5
})

theme.components = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        textAlign: "center"
      },
      h2: {
        textAlign: "center"
      }
    }
  }
}
