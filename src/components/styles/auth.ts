import { SxProps } from "@mui/system";

interface AuthStyles {
  container: SxProps;
  passcodeContainer: SxProps;
}

export const authStyles: AuthStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "95vh",
  },
  passcodeContainer: {
    border: "1px solid #386EB2",
    background: "#FFF",
    borderRadius: "8px",
    py: { xs: 5, md: 8 },
    px: 3,
  },
};
