import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C0DFF7",
    },
    secondary: {
      main: "#D9E8F3",
    },
    tertiary: {
      main: "#F2F1F0",
    },
  },
});

export default theme;
// export default function Theme() {
//   const classes = theme;
//   return classes;
// }
