import { Typography, Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { authTocken } from "../context/authContext";
import { getDashboard } from "../Company_Admin_Apicalls/apiCalls";

const DashBoard = () => {
  const [count,setCount]=useState<number[]>([])
  const { tocken } = useContext(authTocken);
  useEffect(() => {
    const fetchData = async () => {
      const data:any[] =await getDashboard(tocken);    
      const data1: number[] = data.map((item) => item.count);
      setCount(data1)
    };
    fetchData();
  }, [tocken]);
  return (
    <Container maxWidth="lg">
      <Box sx={{ position: "relative", left: "0%" }}>
        <Grid container spacing={3}>
          <Box sx={{ display: "flex", gap: "150px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  boxShadow: "0px 4px 6px rgba(0,0,0)",
                  p: 2,
                  width: "10rem",
                }}
              >
                <Typography>Companies</Typography>
                <p>{count[0]}</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  boxShadow: "0px 4px 6px rgba(0,0,0)",
                  p: 2,
                  width: "10rem",
                }}
              >
                <Typography>Tutorials</Typography>
                <p>{count[1]}</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  boxShadow: "0px 4px 6px rgba(0,0,0)",
                  p: 2,
                  width: "10rem",
                }}
              >
                <Typography>Simulations</Typography>
                <p>{count[2]}</p>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashBoard;
