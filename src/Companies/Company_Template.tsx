import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import Buttons from "./Company_Buttons";

const Company_Template = () => {
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
        <Typography>Company</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Buttons />
      </Box>
      <Outlet />
    </Box>
  );
};

export default Company_Template;
