import { Box } from "@mui/system";
import Buttons from "./Admin_Button";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

const Company_Admin = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 8,
          position: "absolute",
          top: "15%",
          left: "20%",
        }}
      >
        <Typography>Company Admins</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Buttons />
      </Box>
      <Outlet />
    </Box>
  );
};

export default Company_Admin;
