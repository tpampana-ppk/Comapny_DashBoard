import { Link } from "react-router-dom";
import { Button, Grid, Container } from "@mui/material";

const Buttons = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ position: "absolute", top: "20%", left: "auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/admin/companies/compadd`}>
            <Button fullWidth variant="contained">
              Add Company
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/admin/companies/compadd`}>
            <Button fullWidth variant="contained">
              Edit Company
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/admin/companies/compdelete`}>
            <Button fullWidth variant="contained">
              Delete Company
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Buttons;
