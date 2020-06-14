import darkTheme from "./themes/dark.theme.json";
import lightTheme from "./themes/light.theme.json";
import retroTheme from "./themes/retro.theme.json";

const theme = {
  [lightTheme.name]: lightTheme,
  [darkTheme.name]: darkTheme,
  [retroTheme.name]: retroTheme,
};

export default theme;
