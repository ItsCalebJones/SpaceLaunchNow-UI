import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({
  useTheme,
});
