import { PaletteColorOptions, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


declare module '@mui/material/styles' {
    interface Palette {
      minhaCorNova: PaletteColorOptions;
    }
    interface PaletteOptions {
      minhaCorNova: PaletteColorOptions;
    }
}  

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        minhaCorNova: true;
    }
}

const { palette } = createTheme();
export const theme = createTheme({
    palette: {
        minhaCorNova: palette.augmentColor({ color: grey })
    },
});