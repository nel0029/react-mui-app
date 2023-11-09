/** @format */

import { createTheme, ThemeProvider, colors } from "@mui/material";
import "./App.css";
// import { MUITable } from './components/MUITable'
import { MUICustomTheme } from "./components/MUICustomTheme";

import { MUIButton } from "./components/MUIButton";
import { MUITextField } from "./components/MUITextField";
import { MUISelect } from "./components/MUISelect";
import { MUIRadioButton } from "./components/MUIRadioButton";
import { MUICheckbox } from "./components/MUICheckbox";
import { MUISwitch } from "./components/MUISwitch";
import { MUIRating } from "./components/MUIRating";
import { MUIAutoComplete } from "./components/MUIAutoComplete";
import { MUILayout } from "./components/MUILayout";
import { MUICard } from "./components/MUICard";
import { MUIAccordion } from "./components/MUIAccordion";
import { MUIImageList } from "./components/MUIImageList";
import { MUINavbar } from "./components/MUINavbar";
import { MUILink } from "./components/MUILink";
import { MUIBreadcrumbs } from "./components/MUIBreadcrumbs";
import { MUIDrawer } from "./components/MUIDrawer";
import { MUITabs } from "./components/MUITabs";
import { MUISpeedDial } from "./components/MUISpeedDial";
import { MUIBottomNavigation } from "./components/MUIBottomNavigation";
import { MUIAvatar } from "./components/MUIAvatar";
import { MUIBadge } from "./components/MUIBadge";
import { MUIList } from "./components/MUIList";
import { MUIChip } from "./components/MUIChip";
import { MUITooltip } from "./components/MUITooltip";
import { MUIAlert } from "./components/MUIAlert";
import { MUISnackbar } from "./components/MUISnackbar";
import { MUIDialog } from "./components/MUIDialog";
import { MUISkeleton } from "./components/MUISkeleton";
import { MUIProgress } from "./components/MUIProgress";
import { MUILoadingButton } from "./components/MUILoadingButton";
import { MUITimeline } from "./components/MUITimeline";
import { MUIMasonry } from "./components/MUIMasonry";
import { MUITypography } from "./components/MUITypography";
import { MUITable } from "./components/MUITable";
import MUIDatePicker from "./components/MUIDatePicker";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MUITypography />
        <MUIButton />
        <MUITextField />
        <MUISelect />
        <MUIRadioButton />
        <MUICheckbox />
        <MUISwitch />
        <MUIRating />
        <MUIAutoComplete />
        <MUILayout />
        <MUICard />
        <MUIAccordion />
        <MUIImageList />
        <MUINavbar />
        <MUILink />
        <MUIBreadcrumbs />
        <MUIDrawer />
        <MUITabs />
        <MUISpeedDial />
        <MUIBottomNavigation />
        <MUIAvatar />
        <MUIBadge />
        <MUIList />
        <MUIChip />
        <MUITooltip />
        <MUITable />
        <MUIAlert />
        <MUISnackbar />
        <MUIDialog />
        <MUISkeleton />
        <MUIProgress />
        <MUILoadingButton />
        <MUIMasonry />
        <MUITimeline />
        <MUICustomTheme />
        <MUIDatePicker />
      </div>
    </ThemeProvider>
  );
}

export default App;
